class review {
    constructor(id, body) {
        this.id = id;
        this.body = body;
        return this;
    }

    print() {
        console.log(JSON.stringify(this, null, 2));
    }
}

export default review;