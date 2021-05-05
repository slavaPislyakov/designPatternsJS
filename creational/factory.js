class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class MediumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 100;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MembershipFactory {
  static list = {
    simple: SimpleMembership,
    medium: MediumMembership,
    premium: PremiumMembership,
  };

  create(name, type = "simple") {
    const Membership =
      MembershipFactory.list[type] || MembershipFactory.list.simple;
    const member = new Membership(name);

    return member;
  }
}

const factory = new MembershipFactory();
const members = [
  factory.create("Vyacheslav", "simple"),
  factory.create("Olga", "medium"),
  factory.create("Vladislav", "premium"),
  factory.create("Kiril"),
];

console.log(members);
