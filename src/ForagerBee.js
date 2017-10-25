class ForagerBee extends Grub {
  // TODO..
  constructor(){
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.color = 'yellow';
    super.food;
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
