(function(){
  'use strict';
  var LATEST_VERSION='1.04';
  var installed=localStorage.getItem('ttf_version')||'1.01';
  window.AVAILABLE_VERSION=LATEST_VERSION;
  window.INSTALLED_VERSION=installed;

  window.renderUpdate=function(configPage){
    var current=localStorage.getItem('ttf_version')||'1.01';
    if(current===LATEST_VERSION)return;
    var html='<div class="update-banner"><h3>🆕 Nova versão V'+LATEST_VERSION+' disponível</h3><div class="muted" style="margin-bottom:10px">Atualize o Treino Tracker para continuar usando a versão mais recente.</div><button onclick="updateApp()">Atualizar agora</button></div>';
    var slot=document.getElementById(configPage?'configUpdate':'updateSlot');
    if(slot)slot.innerHTML=html;
  };

  window.updateApp=function(){
    localStorage.setItem('ttf_version',LATEST_VERSION);
    location.reload();
  };
})();