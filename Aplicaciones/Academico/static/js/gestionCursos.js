(function () {
    const eliminarCursoLinks = document.querySelectorAll('.eliminar-curso');
  
    eliminarCursoLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const eliminarCursoModal = document.querySelector('#exampleModal');
        const eliminarCursoConfirmBtn = eliminarCursoModal.querySelector('.btn-danger');
  
        eliminarCursoConfirmBtn.href = link.href;
        eliminarCursoModal.addEventListener('hide.bs.modal', function () {
          eliminarCursoConfirmBtn.href = '#';
        });
  
        new bootstrap.Modal(eliminarCursoModal).show();
      });
    });
  })();
  