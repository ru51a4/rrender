const { BehaviorSubject } = rxjs;

class store {
    lvl = new BehaviorSubject(null);
    clvls = new BehaviorSubject(null);
    catalog = new BehaviorSubject(null)
};
var _store = new store();