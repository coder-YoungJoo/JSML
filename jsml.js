class jsml {
  
  constructor () {
    // it save html
    this.html = '';
    // it save tags' closing tag  
    this.closing = '';
  }

  addClass (tag, className) {
    var res = ''
    res += '<' + tag + ' class=' + className + '>';
    console.log(res)
    return res;  
  }

  addId (tag, idName) {
    var res = ''
    res += '<' + tag + ' id=' + idName + '>'
    return res;
  }

  div (text = null, cls = null, id = null) {
    // represent this tag
    var div = 'div';
    // variable temp gets temp html
    var temp = '';
    // exception
    if (cls !== null && id !== null) {
      throw new Error('OVERLAP ERROR : You cannot use id and class in one tag');
    }
    // confirm id or class
    if (cls !== null) {
      // if class
      temp += this.addClass(div, cls);
    } else if (id !== null) {
      // if id
      temp += this.addId (div, id);
    } else {
      console.log("flag1")
      // if no selector
      temp += '<div>';
    }
    if (text !== null) {
      // add text
      temp += text;
    }
    this.html += temp;
    // add closing tag
    this.closing += '</div>'
  }

  // li (text = null, cls = null, id = null) {

  // }

  arrToLi (arr = []) {
    if (arr === []) {
      return false;
    }
    // get list and make it <li> tag
    var temp = ''
    for (var i = 0; i < arr.length; i++) {
      temp += '<li>' + arr[i] + '</li>';
    }
    this.html += temp;
  }

  writeDown () {
    document.write(this.html + this.closing);
    console.log(this.html + this.closing);
    this.html = '';
  }
}

