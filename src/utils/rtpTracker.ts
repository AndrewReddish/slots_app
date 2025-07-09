export class RTPTracker {
  totalBet = 0;
  totalWin = 0;

  record(bet: number, win: number) {
    this.totalBet += bet;
    this.totalWin += win;
  }

  get rtp(): number {
    return this.totalBet === 0 ? 0 : this.totalWin / this.totalBet;
  }
}
