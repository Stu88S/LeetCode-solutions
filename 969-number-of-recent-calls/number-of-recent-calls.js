
class RecentCounter {
    constructor() {
        this.requests = [];
    }

    ping(t) {
        this.requests.push(t);
        let startRange = t - 3000;

        this.requests = this.requests.filter(time => time >= startRange);
        
        return this.requests.length;
    }
}

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */