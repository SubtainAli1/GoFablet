
// Lightweight JS for form handling and scroll behavior
document.addEventListener('DOMContentLoaded', function(){
  // Form submit handlers -> redirect to thanks.html
  function wireForm(id){
    var form = document.getElementById(id);
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Basic validation
      var valid = true;
      form.querySelectorAll('[required]').forEach(function(inp){
        if(!inp.value.trim()) valid = false;
      });
      if(!valid){ alert('Please fill all required fields.'); return; }

      // Fire analytics event (dataLayer if GTM present)
      if(window.dataLayer) window.dataLayer.push({event: 'formSubmit', formId: id});

      // Simulate success -> redirect to thanks page
      window.location.href = 'thanks.html';
    });
  }
  wireForm('contact-form');
  wireForm('contact-form-2');

  // Smooth scroll for "Get a Free Quote" buttons
  document.querySelectorAll('[data-scroll]').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(btn.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });

  // Analytics for call buttons
  document.querySelectorAll('[href^="tel:"]').forEach(function(link){
    link.addEventListener('click', function(){
      if(window.dataLayer) window.dataLayer.push({event:'clickCall', href: link.getAttribute('href')});
    });
  });

  // If client drops Zoho embed code into #form-zoho or #form-zoho-final, show it and hide the local form
  function observeZoho(placeholderId, formId){
    var ph = document.getElementById(placeholderId);
    var f = document.getElementById(formId);
    if(!ph) return;
    // if placeholder has children (client pasted embed), swap
    if(ph.children.length > 0){ if(f) f.style.display = 'none'; ph.style.display = 'block'; }
    // also set up a simple mutation observer in case the client pastes embed after load
    var mo = new MutationObserver(function(){
      if(ph.children.length > 0){ if(f) f.style.display = 'none'; ph.style.display = 'block'; }
    });
    mo.observe(ph, {childList:true, subtree:true});
  }
  observeZoho('form-zoho','contact-form');
  observeZoho('form-zoho-final','contact-form-2');
});
