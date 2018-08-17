export class Team {
    public memberName: string;
    public memberImage: string;
    public designation: string;

    constructor(name: string, image: string, designation: string) {
        this.memberName = name;
        this.memberImage = image;
        this.designation = designation;
    }
}
