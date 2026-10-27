/* ===== DESIGN LAYER ===== */
(function(){var s=document.createElement('style');s.textContent=':root{--bg:#f3f6fc;--card:#fff;--tx:#0f172a;--mu:#64748b;--pr:#1d4ed8;--ln:#e2e8f0;--sh:0 1px 3px rgba(15,23,42,.08),0 8px 20px rgba(15,23,42,.06)}@media (prefers-color-scheme:dark){:root{--bg:#0b1220;--card:#131c2e;--tx:#e8eefc;--mu:#94a3b8;--pr:#6b9bff;--ln:#22304a;--sh:0 1px 2px rgba(0,0,0,.5)}}body{padding-bottom:86px}.w{padding:0 14px 14px}h2{font-size:17px;font-weight:700}.top{background:linear-gradient(135deg,#0b2a6b,#1d5fd1);border-radius:0 0 24px 24px;margin:0 -14px 14px;padding:16px;color:#fff;box-shadow:var(--sh)}.top h1{font-size:17px;color:#fff}.top .mu{color:#c7d8ff}.top button{background:rgba(255,255,255,.16);color:#fff;border:1px solid rgba(255,255,255,.35);border-radius:99px;padding:7px 14px;font-size:13px}.lg img{height:50px;border-radius:14px}nav{position:fixed;left:0;right:0;bottom:0;margin:0;padding:6px 6px calc(6px + env(safe-area-inset-bottom,0px));background:var(--card);border-top:1px solid var(--ln);box-shadow:0 -4px 18px rgba(0,0,0,.1);z-index:5}nav button{border:0;background:none;color:var(--mu);font-size:10.5px;padding:5px 2px;min-width:58px;display:flex;flex-direction:column;align-items:center;gap:1px;border-radius:12px}nav button.on{background:none;color:var(--pr);font-weight:700}nav button span{font-size:20px}.c,.k{border:0;box-shadow:var(--sh);border-radius:18px}.c{padding:16px}.k{padding:14px}.k b{font-size:21px}.g .k:nth-child(1){border-top:3px solid #3b82f6}.g .k:nth-child(2){border-top:3px solid #8b5cf6}.g .k:nth-child(3){border-top:3px solid #16a34a}.g .k:nth-child(4){border-top:3px solid #dc2626}button{border-radius:12px;padding:10px 14px}button.p{background:linear-gradient(135deg,#1d4ed8,#3b82f6);color:#fff;border:0;font-weight:600;box-shadow:0 4px 12px rgba(29,78,216,.3)}input,select,textarea{border-radius:12px;padding:11px}input:focus,select:focus,textarea:focus{outline:2px solid var(--pr)}.it{display:flex;gap:12px;align-items:center;padding:11px 0;border-bottom:1px solid var(--ln)}.av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#1d4ed8,#60a5fa);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;flex:none}.bd{background:var(--bg);color:var(--pr);border-radius:99px;padding:2px 9px;font-size:11px;font-weight:600}.pb{height:7px;border-radius:99px;background:var(--ln);overflow:hidden;margin:6px 0}.pb i{display:block;height:100%;background:#16a34a}summary{cursor:pointer;font-weight:700;font-size:16px}';document.head.appendChild(s)})();
var ICO={home:'🏠',stu:'🎓',fee:'💰',rep:'📊',sco:'✏️',rpt:'📄',stf:'👥',yr:'🔄'};
function ini(n){return (n||'?').trim().split(/\s+/).slice(0,2).map(function(w){return w[0]}).join('').toUpperCase()}
render=function(){
  var v={home:home,stu:studs,fee:fees,rep:reps,sco:scoresV,rpt:reportsV,stf:staffV,yr:yearV}[tab]();
  var nav=TABS[me.role].map(function(t){return '<button class="'+(tab===t?'on':'')+'" onclick="go(\''+t+'\')"><span>'+ICO[t]+'</span>'+LBL[t]+'</button>'}).join('');
  var f=document.activeElement&&document.activeElement.placeholder==='Search name, class, guardian';
  $('#app').innerHTML='<div class="top"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><div class="lg"><img src="'+LOGO+'"><div><h1>'+esc(S.school)+'</h1><div class="mu">'+esc(S.year)+' · '+esc(S.tn)+' · '+me.role+'</div></div></div><button onclick="out()">Sign out</button></div></div><nav>'+nav+'</nav>'+v+receipt()+card();
  if(f){var i=$('input[placeholder]');if(i){i.focus();i.setSelectionRange(i.value.length,i.value.length)}}
};
var _home=home;
home=function(){return _home().replace('<div class="c"><h2>School settings</h2>','<div class="c"><details><summary>⚙️ School settings</summary>').replace(/(onclick="setSet\(\)">Save<\/button><\/div>)<\/div>$/,'$1</details></div>')};
loginV=function(){$('#app').innerHTML='<div style="min-height:85vh;display:flex;align-items:center"><div class="c" style="width:100%;max-width:380px;margin:auto;text-align:center"><img src="'+LOGO+'" style="height:84px"><h1 style="margin:8px 0 2px;font-size:19px">Winning Faith<br>International School</h1><p class="mu">Staff sign in</p><div style="text-align:left"><label>Email</label><input id="em" type="email" autocomplete="username"><label>Password</label><input id="pw" type="password" autocomplete="current-password"></div><div class="r"><button class="p" style="width:100%" onclick="login()">Sign in</button></div></div></div>'};
studs=function(){
  var opt=CL.map(function(c){return '<option>'+c+'</option>'}).join('');
  var list=S.students.filter(function(s){return !q||(s.name+s.cls+s.guardian).toLowerCase().indexOf(q.toLowerCase())>-1}).map(function(s){
    return '<div class="it"><div class="av">'+esc(ini(s.name))+'</div><div style="flex:1;min-width:0"><b>'+esc(s.name)+'</b> <span class="bd">'+esc(s.cls)+'</span><div class="mu">'+esc(s.guardian||'No guardian')+(s.phone?' · '+esc(s.phone):'')+'</div></div><div style="text-align:right"><b>'+m(s.fee)+'</b><div><button style="padding:4px 10px;font-size:12px;margin-top:4px" onclick="delStudent(\''+s.id+'\')">'+(armed===s.id?'Sure?':'Delete')+'</button></div></div></div>'}).join('')||'<p class="mu">No pupils found</p>';
  return '<div class="c"><details><summary>＋ New admission</summary><label>Pupil’s full name</label><input id="sn"><label>Class</label><select id="sc">'+opt+'</select><label>Parent / guardian</label><input id="sg"><label>Phone</label><input id="sp" type="tel"><label>Admission date</label><input id="sd" type="date" value="'+today()+'"><label>Fee per term (GH₵)</label><input id="sf" type="number" min="0" inputmode="decimal"><div class="r"><button class="p" onclick="addStudent()">Admit pupil</button></div></details></div><div class="c"><h2>Pupils ('+S.students.length+')</h2><input placeholder="Search name, class, guardian" value="'+esc(q)+'" oninput="q=this.value;render()">'+list+'</div>'
};
fees=function(){
  var so=S.students.map(function(s){return '<option value="'+s.id+'">'+esc(s.name)+' ('+esc(s.cls)+')</option>'}).join('');
  var l=S.payments.slice().reverse().map(function(p){return '<div class="it"><div class="av">'+esc(ini(nm(p.sid)))+'</div><div style="flex:1;min-width:0"><b>'+esc(nm(p.sid))+'</b><div class="mu">'+p.rcpt+' · '+esc(p.date)+' · '+esc(p.method)+'</div></div><div style="text-align:right"><b class="ok">'+m(p.amt)+'</b><div><button style="padding:4px 8px;font-size:12px" onclick="rcpt=\''+p.id+'\';render()">Receipt</button> <button style="padding:4px 8px;font-size:12px" onclick="delPay(\''+p.id+'\')">'+(armed===p.id?'Sure?':'Delete')+'</button></div></div></div>'}).join('')||'<p class="mu">No payments yet</p>';
  return '<div class="c"><details open><summary>＋ Record a payment</summary>'+(S.students.length?'<label>Pupil</label><select id="ps">'+so+'</select><label>Amount (GH₵)</label><input id="pa" type="number" min="0" inputmode="decimal"><label>Date</label><input id="pd" type="date" value="'+today()+'"><label>Method</label><select id="pm"><option>Cash</option><option>Mobile money</option><option>Bank</option></select><label>Term</label><input id="pt" value="'+esc(S.term)+'"><div class="r"><button class="p" onclick="addPay()">Save payment</button></div>':'<p class="mu">Admit a pupil first.</p>')+'</details></div><div class="c"><h2>Payment history</h2>'+l+'</div>'
};
reps=function(){
  var l=S.students.slice().sort(function(a,b){return bal(b)-bal(a)}).map(function(s){var f=s.fee||0,p=paid(s.id),b=f-p,pc=f?Math.min(100,Math.round(p/f*100)):0;
    return '<div class="it" style="display:block"><div style="display:flex;justify-content:space-between;gap:8px"><div><b>'+esc(s.name)+'</b> <span class="bd">'+esc(s.cls)+'</span></div><b class="'+(b>0?'bad':'ok')+'">'+m(b)+'</b></div><div class="pb"><i style="width:'+pc+'%"></i></div><div class="mu" style="display:flex;justify-content:space-between"><span>Paid '+m(p)+' of '+m(f)+'</span><span>'+esc(s.phone||'')+'</span></div></div>'}).join('')||'<p class="mu">No pupils yet</p>';
  return '<div class="c"><h2>Fee balances · '+esc(S.term)+'</h2><p class="mu">Highest balance first.</p>'+l+'</div>'
};/* School Records upgrade: levels, teacher classes, academic year, new report card, logo */
var LOGO='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAACCAQMAAABclCXtAAAABlBMVEX///8URqrezXqnAAAAAXRSTlMAQObYZgAABQVJREFUeNpNlU2MFEUYhp+qrpkecJgZfkxmddwZ0UQ0gGMgOkZlWjSaGKNXYzTOCfWAToTDirC0P8GN4TDGiybGTIJBjsZ4UKPQu6hslOgePGAkWisEd8VA77JZene6uzz0/NWlKm/er76q+r73LQBg3cnFZIFMpoZIecNAVo76xWHAgULKBUABiM0zzJxrDRjpAtQqWwZAEePHPEJ/vHrfTlLLHa/PUOFZOvdQ6RHkjq8Au3OulyV15AywUkv1QgoJ16r3Qh4IAUgfdruMWgKsjvdCjp5ImOd7wAGdALtrgAVEnybAhtR0sih1N88td+dsFxBxssf6/b38XSB0xNXvfPvBhjnogoQYClM+skXHAQX3gr/nBgIIk8tVPVNATNwBM+tBgTcpTk3uZk0G3eomE+aUvy4KsGu97E4mua8PIIP+29oaJCmnD4RtkITtuumOcUCSLg7q4YAk5S6IZCjjgWSl0K8xb4Ok6AAkeTe5yEG9gC0g0Q6QJQ0QgGTOHTBsULw2FPLnFJKUC6wmIZc1kkkGT5oByamhkMhFEoMlDpGtFmVSys2A64BTAQlSTEFcJ8APYKmNpASmcksYuFUQPso4QMvH141jKFDiHQc830xOGliZARFSpWiZwMJyCZAGYCl7MW0l3SKtENLB9uz8kSwwgSSA6OC9hW92boXIRUUZiJ2tvKBrP2NFSAvE4Vv/M4X3m9Xk6HPQ2D3C04+3PSJQUQXz4UXi9sjlR/ryOE5OmKWs0wfmJyYkcttAYqvAXLDUf6cqZdssP4bVUwNj0Fr42vb6NT1T+XzHxaPFgQin2Rb/0F5x+8CKqTDrvDTsDiHpzwdmYLkx+C5jfcY4isDN9zUXOVK4oct7fcbUyt8NdWVhfLBpRCEz7EGSCoVCbw08JFecsiz3Dya+yzAnwpeadHU78u+piE3LV1dtL2EYFx+taPX3sN5UlE1tkCXb9AgqlwbAtmDH/jUn57tZFHzJdLPurjZQIFkLM5nyxqfeMi5rAXLUKF+zP4qxGAUoU+SWjrr5OhY3g+QmF0rKvR2g6CLdwAHJG55yYTsQNnWJfcaYjmcze0ZzWDeyXDfGRF5aeMaTX+gZ8HHapoL0DngUKeaEMdrEOmdjQWnkfFr8FXeuxs1s7sV3kYubNwipBQWRKeRadWTA66ECAt8JS3//iIr0iZJyPaUyqlKrFLDke7flLxe/37X42d2Xmvm9F1UsTXm0wreqYRb0xgD43Wsm7hHPessNQN+vm2A0wruARtBcZ301TXkW69D1J4wD1SuUQIFNbtYFRs6QS2yU0j6w2FioexHAjYt3/TsL5NGWC1BDj4LE0IodgJrQPkDNquEDQltHbZDU1B4mANnOtlY9JHAnx4Gsu04CkunMx94CkOe5Z/CAUnlMWx6Moa9ZALnM+TF8hLZOr+QAbBGXOIjt5e2DpaR9TuYpU2a0/G0NJFF98jdvznueZyth0lXNl7VPRwtd1xoUTP/zgcOjD6ePMWuS3yT/a54su+zRd5N2z1u/WB4E+U9ySRcujf8UVbHmmle2d/8Zr1h8kLwwutmViF+tG+rRX5O6K+QnZ3ZgiMKpqMsYpUpd517J91p73q0yWQkWt/XcQejGnrN/HKn4PYb5kPUblHPB7xvIqHe9E5/OD+QxD4Fg75DliEwG9g+5g2lfOB+3BmYtAlTiQF2GeVyHIhyyc2xjTDAMUDZxd/U/RTroSzvzizUAAAAASUVORK5CYII=';
(function(){var s=document.createElement('style');s.textContent='textarea{width:100%;padding:9px;border:1px solid var(--ln);border-radius:8px;background:var(--bg);color:var(--tx);font:inherit}.top{background:var(--pr);color:#fff;padding:10px 12px;border-radius:12px}.top .mu{color:#dbe7ff}.top h1{font-size:16px}.lg{display:flex;gap:10px;align-items:center}.lg img{height:46px;background:#fff;border-radius:8px;padding:3px}.top button{color:#111}.rh{text-align:center}.rh img{height:70px}.sig{display:flex;justify-content:space-between;margin-top:22px;font-size:12px}.sig span{border-top:1px solid #333;padding-top:3px;width:45%;text-align:center}';document.head.appendChild(s);
var ic=document.createElement('link');ic.rel='apple-touch-icon';ic.href=LOGO;document.head.appendChild(ic);var th=document.createElement('meta');th.name='theme-color';th.content='#1446aa';document.head.appendChild(th)})();
var DEF={},SC0='90,1,Highest\n80,2,Higher\n70,3,High\n60,4,High average\n55,5,Average\n50,6,Low average\n40,7,Low\n35,8,Lower\n0,9,Lowest';
DEF.early={n:'Creche, Nursery & KG',subs:['Language & Literacy','Numeracy','Phonics','Creative Arts','Our World Our People','Physical Education','RME'],sc:SC0};
DEF.primary={n:'Primary (Basic 1 to 6)',subs:['English Language','Mathematics','Integrated Science','Our World Our People','Ghanaian Language','RME','Creative Arts','Computing','French','Physical Education'],sc:SC0};
DEF.jhs={n:'JHS (1 to 3)',subs:['English Language','Mathematics','Integrated Science','Social Studies','RME','Ghanaian Language','French','Computing','Creative Arts and Design','Career Technology'],sc:SC0};
S.year='2026/2027';S.tn='Term 1';S.next='';S.levels=JSON.parse(JSON.stringify(DEF));S.all=[];S.asg=[];
TABS.admin.push('yr');LBL.yr='New year';
function lvl(c){var i=CL.indexOf(c);return i<0?'primary':i<4?'early':i<10?'primary':'jhs'}
function subsOf(c){return S.levels[lvl(c)].subs}
function nextCls(c){var i=CL.indexOf(c);return i<0||i>=CL.length-1?null:CL[i+1]}
function gradeOf(c,p){var a=(S.levels[lvl(c)].sc||'').split('\n').map(function(x){return x.split(',')}).filter(function(x){return x.length>2&&!isNaN(+x[0])}).sort(function(x,y){return y[0]-x[0]});for(var i=0;i<a.length;i++)if(p>=+a[i][0])return{g:a[i][1].trim(),r:a[i][2].trim()};return{g:'',r:''}}
function mapS(x){return{id:x.id,name:x.name,cls:x.cls,guardian:x.guardian,phone:x.phone,date:x.adm,fee:+x.fee,active:x.active}}
function paid(id){return S.payments.filter(function(p){return p.sid===id&&p.term===S.term}).reduce(function(a,p){return a+p.amt},0)}
function sum(id){var s=S.students.filter(function(x){return x.id===id})[0];return s?subsOf(s.cls).reduce(function(a,j){return a+(tot(id,j)||0)},0):0}
function spos(c,j,id){var t=tot(id,j);if(t==null)return '';return ord(S.students.filter(function(x){return x.cls===c&&tot(x.id,j)!=null&&tot(x.id,j)>t}).length+1)}
async function loadAll(){
  var a=await sb.from('settings').select('*').eq('id',1).single(),d=a.data||{};
  S.school=d.school||S.school;S.tn=d.term||'Term 1';S.year=d.year||S.year;S.next=d.next_term||'';S.cw=d.cw||50;S.ew=d.ew||50;S.term=S.year+' '+S.tn;
  S.levels=JSON.parse(JSON.stringify(DEF));if(d.levels)Object.keys(d.levels).forEach(function(k){if(S.levels[k])Object.assign(S.levels[k],d.levels[k])});
  var b=await sb.from('students').select('*').order('name');S.all=(b.data||[]).map(mapS);S.students=S.all.filter(function(x){return x.active!==false});
  S.payments=[];if(can('money')){var c=await sb.from('payments').select('*').order('rno');S.payments=(c.data||[]).map(function(x){return{id:x.id,sid:x.sid,amt:+x.amt,date:x.pdate,method:x.method,term:x.term,rcpt:rn(x.rno)}})}
  S.scores={};S.rem={};
  var e=await sb.from('scores').select('*').eq('term',S.term);(e.data||[]).forEach(function(x){S.scores[S.term+'|'+x.sid+'|'+x.subject]={c:x.c,e:x.e}});
  var f=await sb.from('remarks').select('*').eq('term',S.term);(f.data||[]).forEach(function(x){S.rem[S.term+'|'+x.sid]={att:x.att,con:x.con,rem:x.rem,int:x.interest,head:x.head}});
  if(me.role==='admin'){var g=await sb.from('profiles').select('*').order('email');S.staff=g.data||[];var h=await sb.from('assignments').select('*');S.asg=h.data||[]}
}
async function setSet(){
  var lv={};['early','primary','jhs'].forEach(function(k){lv[k]={subs:$('#sb_'+k).value.split(',').map(function(x){return x.trim()}).filter(Boolean),sc:$('#sc_'+k).value}});
  var r=await sb.from('settings').update({school:$('#ss').value.trim()||S.school,year:$('#sy').value.trim()||S.year,term:$('#st').value.trim()||S.tn,next_term:$('#sn').value.trim(),cw:+$('#cw').value||S.cw,ew:+$('#ew').value||S.ew,levels:lv}).eq('id',1);
  if(ok(r)){await loadAll();render()}
}
async function setRem(f,v){var k=S.term+'|'+cardId;S.rem[k]=S.rem[k]||{};S.rem[k][f]=v;var o=S.rem[k];ok(await sb.from('remarks').upsert({sid:cardId,term:S.term,att:o.att||null,con:o.con||null,rem:o.rem||null,interest:o.int||null,head:o.head||null}))}
async function setAsg(id,v){var cs=v.split(',').map(function(x){return x.trim()}).filter(Boolean);var d=await sb.from('assignments').delete().eq('uid',id);if(!ok(d))return;if(cs.length){var r=await sb.from('assignments').insert(cs.map(function(c){return{uid:id,cls:c}}));if(!ok(r))return}await loadAll();render()}
async function newYear(){
  var y=$('#ny').value.trim();if(!y){$('#ny').focus();return}
  if(!newYear.a){newYear.a=1;$('#nyb').textContent='Tap again to confirm';return}
newYear.a=0;$('#nyb').textContent='Working...';
  for(var i=0;i<S.students.length;i++){var x=S.students[i],v=$('#pr_'+x.id).value;
    if(v==='p'){var n=nextCls(x.cls);if(n)await sb.from('students').update({cls:n}).eq('id',x.id)}else if(v==='l')await sb.from('students').update({active:false}).eq('id',x.id)}
  ok(await sb.from('settings').update({year:y,term:'Term 1'}).eq('id',1));await loadAll();tab='home';render()
}
function home(){
  var exp=0,col=0;S.students.forEach(function(s){exp+=s.fee;col+=paid(s.id)});
  var rec=S.payments.slice(-5).reverse().map(function(p){return '<tr><td>'+esc(p.date)+'</td><td>'+esc(nm(p.sid))+'</td><td>'+m(p.amt)+'</td></tr>'}).join('')||'<tr><td class="mu">No payments yet</td></tr>';
  var h='<div class="g"><div class="k"><span class="mu">Pupils</span><b>'+S.students.length+'</b></div><div class="k"><span class="mu">Expected this term</span><b>'+m(exp)+'</b></div><div class="k"><span class="mu">Collected this term</span><b class="ok">'+m(col)+'</b></div><div class="k"><span class="mu">Outstanding</span><b class="bad">'+m(exp-col)+'</b></div></div><div class="c" style="margin-top:12px"><h2>Recent payments</h2><div class="t"><table>'+rec+'</table></div></div>';
  if(can('admin')){h+='<div class="c"><h2>School settings</h2><label>School name</label><input id="ss" value="'+esc(S.school)+'"><label>Academic year</label><input id="sy" value="'+esc(S.year)+'"><label>Current term</label><input id="st" value="'+esc(S.tn)+'"><label>Next term begins</label><input id="sn" value="'+esc(S.next)+'"><label>Class score out of / exam score out of</label><div style="display:flex;gap:6px"><input id="cw" type="number" value="'+S.cw+'"><input id="ew" type="number" value="'+S.ew+'"></div>';
    ['early','primary','jhs'].forEach(function(k){h+='<label style="margin-top:14px"><b>'+DEF[k].n+'</b>: subjects, comma separated</label><input id="sb_'+k+'" value="'+esc(S.levels[k].subs.join(', '))+'"><label>Grades: lowest score, grade, remark (one per line)</label><textarea id="sc_'+k+'" rows="5">'+esc(S.levels[k].sc)+'</textarea>'});
    h+='<div class="r"><button class="p" onclick="setSet()">Save</button></div></div>'}
  return h
}
function scoresV(){
  var co=classes(),subs=cls?subsOf(cls):[];if(!sub||subs.indexOf(sub)<0)sub=subs[0];
  var so=subs.map(function(j){return '<option'+(j===sub?' selected':'')+'>'+esc(j)+'</option>'}).join('');
  var rows=S.students.filter(function(x){return x.cls===cls}).map(function(x){var o=sc(x.id,sub)||{},t=tot(x.id,sub);
    return '<tr><td>'+esc(x.name)+'</td><td><input class="sm" type="number" inputmode="decimal" value="'+(o.c==null?'':o.c)+'" onchange="setSc(this,\''+x.id+'\',\'c\')"></td><td><input class="sm" type="number" inputmode="decimal" value="'+(o.e==null?'':o.e)+'" onchange="setSc(this,\''+x.id+'\',\'e\')"></td><td id="t'+x.id+'">'+(t==null?'':t)+'</td></tr>'}).join('')||'<tr><td class="mu">No classes assigned to you yet. Ask the admin.</td></tr>';
  return '<div class="c"><h2>Enter scores · '+esc(S.term)+'</h2><label>Class</label><select onchange="cls=this.value;render()">'+co+'</select><label>Subject</label><select onchange="sub=this.value;render()">'+so+'</select><div class="t" style="margin-top:8px"><table><tr><th>Pupil</th><th>Class /'+S.cw+'</th><th>Exam /'+S.ew+'</th><th>Total</th></tr>'+rows+'</table></div><p class="mu">Each box saves when you leave it.</p></div>'
}
function staffV(){
  var rows=S.staff.map(function(p){var cs=S.asg.filter(function(a){return a.uid===p.id}).map(function(a){return a.cls}).join(', ');
    return '<tr><td>'+esc(p.email)+'</td><td><select onchange="setRole(\''+p.id+'\',this.value)"'+(p.id===me.id?' disabled':'')+'>'+['admin','accounts','teacher'].map(function(r){return '<option'+(p.role===r?' selected':'')+'>'+r+'</option>'}).join('')+'</select></td><td><input value="'+esc(cs)+'" placeholder="e.g. Basic 3, Basic 4" onchange="setAsg(\''+p.id+'\',this.value)"></td></tr>'}).join('');
  return '<div class="c"><h2>Staff</h2><p class="mu">Add new staff in Supabase (Authentication > Users > Add user). Give each teacher their classes, separated by commas. Class names: '+CL.join(', ')+'.</p><div class="t"><table><tr><th>Email</th><th>Role</th><th>Classes</th></tr>'+rows+'</table></div></div>'
}
function yearV(){
  var rows=S.students.map(function(x){var n=nextCls(x.cls),d=n?'p':x.cls==='JHS 3'?'l':'r';
    return '<tr><td>'+esc(x.name)+'</td><td>'+esc(x.cls)+'</td><td><select id="pr_'+x.id+'"><option value="p"'+(d==='p'?' selected':'')+(n?'':' disabled')+'>Promote to '+esc(n||'-')+'</option><option value="r"'+(d==='r'?' selected':'')+'>Repeat class</option><option value="l"'+(d==='l'?' selected':'')+'>Left school</option></select></td></tr>'}).join('')||'<tr><td class="mu">No pupils</td></tr>';
  return '<div class="c"><h2>Start a new academic year</h2><p class="mu">Current: '+esc(S.year)+'. Choose what happens to each pupil, then confirm. Old scores and reports stay saved under their year. Left pupils are kept but hidden. Balances start fresh each term.</p><label>New academic year</label><input id="ny" placeholder="e.g. 2027/2028"><div class="t" style="margin-top:8px"><table><tr><th>Pupil</th><th>Class</th><th>Action</th></tr>'+rows+'</table></div><div class="r"><button class="p" id="nyb" onclick="newYear()">Start new year</button></div></div>'
}
function card(){
  var s=S.students.filter(function(x){return x.id===cardId})[0];if(!s)return '';
  var r=S.rem[S.term+'|'+s.id]||{},l=pos(s.cls),q2=l.filter(function(x){return x.s.id===s.id})[0],den=S.cw+S.ew;
  var rows=subsOf(s.cls).map(function(j){var x=sc(s.id,j)||{},t=tot(s.id,j),g=t==null?{g:'',r:''}:gradeOf(s.cls,t/den*100);
    return '<tr><td>'+esc(j)+'</td><td>'+(x.c==null?'':x.c)+'</td><td>'+(x.e==null?'':x.e)+'</td><td>'+(t==null?'':t)+'</td><td>'+esc(g.g)+'</td><td>'+spos(s.cls,j,s.id)+'</td><td>'+esc(g.r)+'</td></tr>'}).join('');
  var inp=function(lb,k,ro){return '<label>'+lb+'</label><input value="'+esc(r[k])+'"'+(ro?' readonly':'')+' onchange="setRem(\''+k+'\',this.value)">'};
  return '<div id="rc" class="cd"><div><div class="rh"><img src="'+LOGO+'"><h2 style="margin:4px 0 0">'+esc(S.school)+'</h2><b>TERMINAL REPORT</b></div><table style="margin-top:8px"><tr><td>Name: <b>'+esc(s.name)+'</b></td><td>Class: <b>'+esc(s.cls)+'</b></td></tr><tr><td>Academic year: <b>'+esc(S.year)+'</b></td><td>Term: <b>'+esc(S.tn)+'</b></td></tr><tr><td>No. on roll: <b>'+l.length+'</b></td><td>Position: <b>'+ord(q2.p)+'</b></td></tr><tr><td colspan="2">Next term begins: <b>'+esc(S.next)+'</b></td></tr></table><div class="t" style="margin-top:8px"><table><tr><th>Subject</th><th>Class /'+S.cw+'</th><th>Exam /'+S.ew+'</th><th>Total /'+den+'</th><th>Grade</th><th>Pos.</th><th>Remarks</th></tr>'+rows+'</table></div><p>Overall total: <b>'+q2.t+'</b></p>'+inp('Attendance','att')+inp('Conduct','con')+inp('Interest','int')+inp('Class teacher’s remarks','rem')+inp('Head teacher’s remarks','head',!can('admin'))+'<div class="sig"><span>Class teacher</span><span>Head teacher</span></div><div class="r np"><button onclick="try{window.print()}catch(e){}">Print</button><button class="p" onclick="cardId=null;render()">Close</button></div></div></div>'
}
function render(){
  var v={home:home,stu:studs,fee:fees,rep:reps,sco:scoresV,rpt:reportsV,stf:staffV,yr:yearV}[tab]();
  var nav=TABS[me.role].map(function(t){return '<button class="'+(tab===t?'on':'')+'" onclick="go(\''+t+'\')">'+LBL[t]+'</button>'}).join('');
  var f=document.activeElement&&document.activeElement.placeholder==='Search name, class, guardian';
  $('#app').innerHTML='<div class="top"><div class="lg"><img src="'+LOGO+'"><div><h1>'+esc(S.school)+'</h1><div class="mu">'+esc(S.year)+' · '+esc(S.tn)+' · '+esc(me.email)+' ('+me.role+')</div></div></div><button onclick="out()">Sign out</button></div><nav>'+nav+'</nav>'+v+receipt()+card();
  if(f){var i=$('input[placeholder]');if(i){i.focus();i.setSelectionRange(i.value.length,i.value.length)}}
}
/* ===== EXTRAS: import pupils + installable app ===== */
var _st2=studs;
studs=function(){return _st2()+'<div class="c"><details><summary>📥 Import existing pupils</summary><p class="mu">One pupil per line: Name, Class, Guardian, Phone, Fee. You can paste straight from Excel. Class must be one of: '+CL.join(', ')+'.</p><textarea id="imp" rows="8" placeholder="Agbovie Bright, JHS 2, Mr Agbovie, 0240000000, 400"></textarea><div class="r"><button class="p" onclick="importPupils()">Import</button></div></details></div>'};
async function importPupils(){
  var ls=$('#imp').value.split('\n').map(function(x){return x.trim()}).filter(Boolean),rows=[],bad=[];
  ls.forEach(function(l){var a=l.split(/\t|,/).map(function(x){return x.trim()});if(!a[0]||CL.indexOf(a[1])<0){bad.push(l);return}rows.push({name:a[0],cls:a[1],guardian:a[2]||'',phone:a[3]||'',fee:parseFloat(a[4])||0})});
  if(bad.length){note('Check the class name on: '+bad.slice(0,3).join(' | '));return}
  if(!rows.length)return;
  var r=await sb.from('students').insert(rows);if(!ok(r))return;await loadAll();render();note('Imported '+rows.length+' pupils')
}
(function(){var l=document.createElement('link');l.rel='manifest';l.href='manifest.json';document.head.appendChild(l);if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js')})();
