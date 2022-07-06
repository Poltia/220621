

import * as THREE from '../THREE_js/three.module.js'; // three.module.js 파일을 모듈 버전으로 불러옴
import { OrbitControls } from '../THREE_js/OrbitControls.js'; // 마우스로 화면 컨트롤 가능
import { VertexNormalsHelper } from '../THREE_js/VertexNormalsHelper.js'

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
        camera.position.z = 3;
        this._camera = camera;
        this._scene.add(camera);
    }

    _setupLight() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        this._scene.add(ambientLight);

        const color = 0xffffff;  //광원의 색상
        const intensity = 1;  //광원의 세기
        const light = new THREE.DirectionalLight(color, intensity);  //색상과 세기로 광원 생성
        light.position.set(-1, 2, 4); //광원의 위치
        //this._scene.add(light);
        this._camera.add(light);
    }

    _setupModel() {
        const textureLoader = new THREE.TextureLoader();
        const mapAO = textureLoader.load("../THREE_js/imgs/glass/Glass_Window_002_ambientOcclusion.jpg");
        const map = textureLoader.load("../THREE_js/imgs/glass/Glass_Window_002_basecolor.jpg");
        const mapHeight = textureLoader.load("../THREE_js/imgs/glass/Glass_Window_002_height.png");
        const mapMetalic = textureLoader.load("../THREE_js/imgs/glass/Glass_Window_002_metallic.jpg");
        const mapNormal = textureLoader.load("../THREE_js/imgs/glass/Glass_Window_002_normal.jpg");
        const mapAlpha = textureLoader.load("../THREE_js/imgs/glass/Glass_Window_002_opacity.jpg");
        const mapRoughness = textureLoader.load("../THREE_js/imgs/glass/Glass_Window_002_roughness.jpg");
        const mapLight = textureLoader.load("../THREE_js/imgs/light2.jpeg");

        const material = new THREE.MeshStandardMaterial({
            map: map,
            normalMap: mapNormal,

            displacementMap: mapHeight,
            displacementScale: 0.2,
            displacementBias: -0.15,

            aoMap: mapAO,
            aoMapIntensity: 1, //강도 조절. default: 1

            roughnessMap: mapRoughness,
            toughness: 0.5,  //강도 조절. default: 1

            metalnessMap: mapMetalic,
            metalness: 0.5,

            alphaMap: mapAlpha,
            transparent: true,
            side: THREE.DoubleSide,

            lightMap: mapLight,
            lightMapIntensity: 2, //강도 조절. default: 1
        });

        const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, 256, 256, 256), material);
        box.position.set(-1, 0, 0);
        box.geometry.attributes.uv2 = box.geometry.attributes.uv;
        this._scene.add(box);
/*
        const boxHelper = new VertexNormalsHelper(box, 0.1, 0xffff00);
        this._scene.add(boxHelper); //법선 벡터 시각화 */


        const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 512, 512), material);
        sphere.position.set(1, 0, 0);
        sphere.geometry.attributes.uv2 = sphere.geometry.attributes.uv;
        this._scene.add(sphere);
/*
        const sphereHelper = new VertexNormalsHelper(sphere, 0.1, 0xffff00);
        this._scene.add(sphereHelper); //법선 벡터 시각화 */
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