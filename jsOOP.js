class Person {
    name;
    constructor(name) {
        this.name = name;
    }

    // ต่างจากpython ตรงนี้ไม่ต่องใช้คำสั้งสร้างฟงัชั้นfunction  หรือdefเหมือน ในpython
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}


class Professor extends Person {

    teaches;
    constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
    }
}


// และการสืบทอดcalssในนี้จะใช้extend
const giles = new Person('Giles')
giles.introduceSelf()
// การสืบทดอจะเห็ฯได้ว่าclass Professor ไ่ม่จำเป็นต้องมีทำmethodหรือที่เรียกว่าฟังชั้นในการแสดงผลก็สามารใช่ร่วมกับ class personได้ 
const yuri= new Professor('Yuri')
yuri.introduceSelf()

// คล้ายกับpython ที่ใช้__  js  ใช้ #การป้องกันการเข้าถึงข้อมูลจากภายนอก