const solc = require("solc");
// fs-extra : node fs 모듈에 없는 추가적인 file시스템 함수를 사용할 수 있다.(종합버전)
const fs = require("fs-extra");
const path = require("path");

class Contract {
    static compile(_filename) {
        const contractPath = path.join(__dirname, "../contracts", _filename);
        const source = fs.readFileSync(contractPath, "utf8");
        console.log(contractPath);
        // 출력 -> /Users/allen/Documents/KGA_blockchain/KGA_class/2022_Nov/20221124/contracts/test.sol
        console.log(source);
        // 출력 -> test.sol 파일 내용이 출력됨

        let solcInput = {
            language: "Solidity",
            sources: {
                constract: {
                    content: source,
                },
            },
            settings: {
                optimizer: {
                    enabled: true,
                },
                outputSelection: {
                    "*": {
                        "*": ["*"],
                    },
                },
            },
        };

        solcInput = JSON.stringify(solcInput);
        console.log(solcInput);
        // 출력 -> 객체로된 solcInput 출력됨
        // solc.compile() : sol 파일을 컴파일 해주는 함수
        let contractObject = solc.compile(solcInput);
        contractObject = JSON.parse(contractObject);
        console.log(contractObject);
        /* 출력 -> {
                    contracts: { constract: { HelloWorld: [Object] } },
                    sources: { constract: { id: 0 } }
                  } */
        for (const key in contractObject.contracts) {
            const contractName = "HelloWorld";
            const contract = contractObject.contracts[key][contractName];
            const abi = contract.abi;
            console.log(abi);
            /* 출력 ->
            [
                { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
                {
                    inputs: [ [Object] ],
                    name: 'setValue',
                    outputs: [],
                    stateMutability: 'nonpayable',
                    type: 'function'
                },
                {
                    inputs: [],
                    name: 'value',
                    outputs: [ [Object] ],
                    stateMutability: 'view',
                    type: 'function'
                }
            ] */
            const bytecode = contract.evm.bytecode.object;
            //console.log(bytecode);
            // upload 폴더에 json파일 생성
            const obj = { abi, bytecode };
            const _path = path.join(__dirname, "../upload", `${contractName}.json`);
            fs.outputJSONSync(_path, obj);

            return [abi, bytecode];
        }
    }
}

module.exports = { Contract };
