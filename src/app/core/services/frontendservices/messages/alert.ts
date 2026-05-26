import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})

export class Alert {

  // Success Toast
  success(title: string, message: string) {

    const Toast = Swal.mixin({

      toast: true,

      position: 'bottom-end',

      showConfirmButton: false,

      timer: 1200,

      timerProgressBar: true,

      customClass: {
        popup: 'success-toast'
      },

      didOpen: (toast) => {

        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;

      }

    });

    Toast.fire({
      icon: 'success',
      title: title,
      text: message
    });

  }

  // Error Toast
  error(title: string, message: string) {

    const Toast = Swal.mixin({

      toast: true,

      position: 'bottom-end',

      showConfirmButton: false,

      timer: 1800,

      timerProgressBar: true,

      customClass: {
        popup: 'error-toast'
      },

      didOpen: (toast) => {

        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;

      }

    });

    Toast.fire({
      icon: 'error',
      title: title,
      text: message
    });

  }

  // Confirm Popup
  confirm(title: string, message: string) {

    return Swal.fire({

      title,

      text: message,

      icon: 'warning',

      confirmButtonText: 'Remove',

      cancelButtonText: 'Keep',

      showCancelButton: true,

      reverseButtons: true,

      customClass: {
        popup: 'confirm-popup'
      }

    });

  }

}