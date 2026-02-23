
class Place{
    constructor(title, imageUri, address, location) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;
        this.id = new Date().toISOString() + Math.random().toString(36).substring(2, 9);
    }
}