

import * as THREE from '../THREE_js/three.module.js'; // three.module.js 파일을 모듈 버전으로 불러옴
import { OrbitControls } from '../THREE_js/OrbitControls.js'; // 마우스로 화면 컨트롤 가능

class App {
    constructor() {
        const divContainer = document.querySelector("#webgl-container");
        this._divContainer = divContainer;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        divContainer.appendChild(renderer.domElement);
        this._renderer = renderer;

        const scene = new THREE.Scene();
        this._scene = scene;

        this._setupCamera();
        this._setupLight();
        this._setupModel();
        this._setupControls();

        window.onresize = this.resize.bind(this);
        this.resize();

        requestAnimationFrame(this.render.bind(this));
    }

    _setupControls() {
        new OrbitControls(this._camera, this._divContainer);
    }

    _setupCamera() {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            100
        );
        camera.position.z = 7;
        this._camera = camera;
    }

    _setupLight() {
        const color = 0xffffff;  //광원의 색상
        const intensity = 1;  //광원의 세기
        const light = new THREE.DirectionalLight(color, intensity);  //색상과 세기로 광원 생성
        light.position.set(-1, 2, 4); //광원의 위치
        this._scene.add(light);
    }

    _setupModel() {
        const textureLoader = new THREE.TextureLoader();
        const map = textureLoader.load(
            "../THREE_js/uv_grid_opengl.jpg",
            texture => {
                texture.repeat.x = 1;
                texture.repeat.y = 1;

                texture.wrapS = THREE.ClampToEdgeWrapping;
                texture.wrapT = THREE.ClampToEdgeWrapping;

                texture.offset.x = 0; //uv좌표의 시작위치 설정
                texture.offset.y = 0;

                texture.rotation = THREE.MathUtils.degToRad(0); //uv좌표 (0,0)을 기준으로 ()도만큼 반시계방향으로 돌림
                texture.center.x = 0.5; //회전의 기준이 되는 uv좌표 설정. 기본은 0
                texture.center.y = 0.5;

                texture.magFilter = THREE.NearestFilter;
                // minFilter의 종류. Mipmap이 선명도는 좋지만 연산이 많아 속도면에서 불리하기때문에 상황에 맞게 써야한다.
                //texture.minFilter = THREE.NearestFilter;
                //texture.minFilter = THREE.LinearFilter;
                //texture.minFilter = THREE.NearestMipmapLinearFilter;
                //texture.minFilter = THREE.NearestMipmapNearestFilter;
                //texture.minFilter = THREE.LinearMipmapNearestFilter;
                texture.minFilter = THREE.LinearMipmapLinearFilter;

            }
        );

        const material = new THREE.MeshStandardMaterial({
            map: map
        });

        const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
        box.position.set(-1, 0, 0);
        this._scene.add(box);

        const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), material);
        sphere.position.set(1, 0, 0);
        this._scene.add(sphere);
    }

    resize() {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();

        this._renderer.setSize(width, height);
    }

    render(time) {
        this._renderer.render(this._scene, this._camera);
        this.update(time);
        requestAnimationFrame(this.render.bind(this));
    }

    update(time) {
        time *= 0.001;
    }
}

window.onload = function() {
    new App();
}