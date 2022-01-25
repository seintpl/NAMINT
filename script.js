function addname(value) {
  all += '<tr><td style="width: 40%;">' + value + '</td><td><a href=\'https://www.google.pl/search?q="' + value + '"\' target=_blank>Google</a></td><td><a href=\'https://www.bing.com/search?q="' + value + '"\' target=_blank>Bing</a></td><td><a href=\'https://yandex.com/search/?text="' + value + '"\' target=_blank>Yandex</a></td><td><a href=\'https://www.facebook.com/public/' + value + '\' target=_blank>Facebook</a></td><td><a href=\'https://twitter.com/search?q=' + value + '&src=typed_query&f=user\' target=_blank>Twitter</a></td><td>';
  if (linum==0) {
    all += '<a href=\'https://www.linkedin.com/pub/dir?firstName=' + f + '&lastName=' + l + '&src=typed_query&f=user\' target=_blank>LinkedIn</a>';
    linum++;
  }
  all += '</td></tr>';
}

function forname(value) {
  if (ornum==0) {ornum++;} else {orname += ' OR ';}
  orname += '"' + value + '"';
}

function addlogin(value) {
  all += '<tr><td style="width: 40%;">' + value + '</td><td><a href=\'https://www.google.pl/search?q="' + value + '"\' target=_blank>Google</a></td><td><a href=\'https://www.bing.com/search?q="' + value + '"\' target=_blank>Bing</a></td><td><a href=\'https://yandex.com/search/?text="' + value + '"\' target=_blank>Yandex</a></td><td><a href=\'https://www.google.pl/search?q="' + value + '@gmail.com"+OR+"' + value + '@outlook.com"+OR+"' + value + '@icloud.com"+OR+"' + value + '@yahoo.com"+OR+"' + value + '@protonmail.com"\' target=_blank>Google common emails</a></td><td><a href=\'https://www.facebook.com/' + value + '\' target=_blank>Facebook profile name</a></td><td><a href=\'https://twitter.com/' + value + '\' target=_blank>Twitter handle</a></td></tr>';
}

function openallfb(a) {
  all += 'window.open(\'https://facebook.com/public/' + a + '\',\'' + a + '\');';
}

function openalltw(a) {
  all += 'window.open(\'https://twitter.com/search?q=' + a + '&src=typed_query&f=user\',\'' + a + '\');';
}

function mashup() {
  f = document.getElementById("first").value;
  m = document.getElementById("middle").value;
  l = document.getElementById("last").value;
  if (f==''||l=='') {document.getElementById("namint_result").innerHTML = '<div style="padding-top: 10px; font-weight:bold;">Enter at least first and last name above.</div>';}
  else {
    all = '<div style="padding-top: 10px; font-weight:bold;">Possible name patterns and search links:</div><div style="border: 1px solid #ddd;"><table class="table">';
    orname = '';
    ornum = 0;
    linum = 0;
    const p = [];
    const q = [];
    const r = [];
    const s = [];
    p[1] = f + ' ' + l;
    p[2] = f.substr(0,1) + '. ' + l;
    p[3] = l + ' ' + f;
    p[4] = l + ' ' + f.substr(0,1) + '.';
    p.forEach(forname);
    p[5] = l;
    p.forEach(addname);
    if (m.length>0) {
      q[1] = f + ' ' + m + ' ' + l;
      q[2] = f.substr(0,1) + '. ' + m.substr(0,1) + '. ' + l;
      q[3] = l + ' ' + f + ' ' + m;
      q[4] = l + ' ' + f.substr(0,1) + '. ' + m.substr(0,1) + '.';
      q[5] = m + ' ' + l
      q.forEach(addname);
      q.forEach(forname);
    }
    all += '<tr><td style="width: 40%; font-weight: bold;">ALL <span title="For FB / Twitter links to work properly, allow this site to open new tabs / windows"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></span></td><td><a href=\'https://www.google.pl/search?q=' + orname + '\' target=_blank>Google</a></td><td><a href=\'https://www.bing.com/search?q=' + orname + '\' target=_blank>Bing</a></td><td><a href=\'https://yandex.com/search/?text=' + orname + '\' target=_blank>Yandex</a></td><td><a href=# onclick="';
    p.forEach(openallfb);    
    all += '">Facebook</a></td><td><a href=# onclick="';
    p.forEach(openalltw);
    all += '">Twitter</a></td></tr>';
    all += '</table></div><div style="padding-top: 10px; font-weight:bold;">Possible login patterns and search links:</div><div style="border: 1px solid #ddd;"><table class="table">';
    r[1] = f.toLowerCase() + '.' + l.toLowerCase();
    r[2] = l.toLowerCase() + '.' + f.toLowerCase();
    r[3] = f.substr(0,1).toLowerCase() + '.' + l.toLowerCase();
    r[4] = l.toLowerCase() + '.' + f.substr(0,1).toLowerCase();
    r[5] = f.toLowerCase() + l.toLowerCase();
    r[6] = l.toLowerCase() + f.toLowerCase();
    r[7] = f.substr(0,1).toLowerCase() + l.toLowerCase();
    r[8] = l.toLowerCase() + f.substr(0,1).toLowerCase();
    r[9] = f.toLowerCase() + l.substr(0,1).toLowerCase();
    r.forEach(addlogin);
    if (m.length>0) {
      s[1] = f.toLowerCase() + m.toLowerCase() + l.toLowerCase();
      s[2] = l.toLowerCase() + f.toLowerCase() + m.toLowerCase();
      s[3] = f.substr(0,1).toLowerCase() + m.substr(0,1).toLowerCase() + l.toLowerCase();
      s[4] = l.toLowerCase() + f.substr(0,1).toLowerCase() + m.substr(0,1).toLowerCase();
      s[5] = m.toLowerCase() + l.toLowerCase();
      s[6] = l.toLowerCase() + m.toLowerCase();
      s.forEach(addlogin);
    }  
    all += '</table></div>';
    document.getElementById("namint_result").innerHTML = all;
  } 
}