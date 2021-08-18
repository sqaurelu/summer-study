class CovidState {
    static make(item) {
        const { createDt, deathCnt, defCnt, gubun, isolClearCnt, isolIngCnt, localOccCnt, overFlowCnt } = item;

        return new CovidState(createDt, deathCnt, defCnt, gubun, isolClearCnt, isolIngCnt, localOccCnt, overFlowCnt);
    }

    constructor(createDt, deathCnt, defCnt, gubun, isolClearCnt, isolIngCnt, localOccCnt, overFlowCnt) {
        this.createDt = createDt;
        this.deathCnt = deathCnt;
        this.defCnt = defCnt;
        this.gubun = gubun;
        this.isolClearCnt = isolClearCnt;
        this.isolIngCnt = isolIngCnt;
        this.localOccCnt = localOccCnt;
        this.overFlowCnt = overFlowCnt;
    }
}

export default CovidState;