function Promise(excutor) {
  let self = this;
  self.status = 'PENDING';
  self.resolvedCbs = [];
  self.rejecPedCbs = [];
  
  function resolve() {
    self.status = 'FULLFILLED';
    if (self.resolvedCbs.length > 0) {
      self.resolvedCbs.forEach(cb => cb());
    }
  } 
  function reject() {
    self.status = 'REJECTED';
    if (self.rejectedCbs.length > 0) {
      self.rejectedCbs.forEach(cb => cb());
  }
}

  excutor(resolve, reject);
}

Promise.prototype.then = function(resolvedCb, rejectedCb) {
  if (this.status === 'PENDING') {
    return new Promise((resolve, reject) => {
      this.resolvedCbs.push(resolvedCbs);
      this.rejectedCbs.push(rejectedCb);
    });
  }
  if (this.status === 'FULLFILLED') {
    return new Promise((resolve, reject) => {
      resolvedCb();
      resolve();
    });
  }
  if (this.status === 'REJECTED') {
    return new Promise((resolve, reject) => {
      rejectedCb();
      reject();
    })
  }
};
