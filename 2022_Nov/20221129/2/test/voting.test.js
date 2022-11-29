const Voting = artifacts.require("Voting");

// only는 해당 테스트 코드만 실행 시켜준다.
describe.only("Voting", () => {
    let deployed; // 배포 컨트랙트 객체
    let candidateList; // 후보자 목록

    it("deployed", async () => {
        deployed = await Voting.deployed();
    });

    it("candidateList", async () => {
        // 컨트랙트에서 배열을 전부 한번에 들고 올수가 없어서 하나씩 호출함
        const req = [
            deployed.candidateList.call(0),
            deployed.candidateList.call(1),
            deployed.candidateList.call(2),
        ];

        // 비동기로 부르는 동안 처리해 주기
        // Promise.all() : Promise 요청 응답이 전부 끝날때 까지 기다려준다.
        // 배열을 다 가져와서 담아주고
        candidateList = await Promise.all(req);

        console.log(candidateList);
        // 출력 : [ '종화', '하양', '찬' ]
    });

    it("voteForCandidate", async () => {
        await deployed.voteForCandidate(candidateList[1]);
        await deployed.voteForCandidate(candidateList[2]);
        await deployed.voteForCandidate(candidateList[2]);
        await deployed.voteForCandidate(candidateList[1]);
        for (const key of candidateList) {
            let count = await deployed.totalVotesFor(key);
            console.log(`${key} : ${count}`);
            /* 출력 :
                    종화 : 0
                    하양 : 2
                    찬 : 2 */
        }
    }).timeout(10002);
    // .timeout() : 테스트가 오래걸려서 에러가 발생할 경우 시간을 늘려줌
});
