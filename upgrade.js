/* School Records upgrade: levels, teacher classes, academic year, new report card, logo */
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
