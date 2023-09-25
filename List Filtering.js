function filter_list(l) {
    // Return a new array with the strings filtered out
    let newList = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof (l[i]) === 'number') {
        newList.push(l[i])  
      }
    }
    return newList;
  }