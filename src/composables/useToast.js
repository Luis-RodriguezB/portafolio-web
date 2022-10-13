
const useToast = () => {
    const appElement = document.getElementById('app');
    const types = {
        success: 'success',
        error: 'error',
        warning: 'warning',
        info: 'info'
    };

    const createToast = (message, type = types.info) => {
        const toastContainer = document.createElement('div');
        toastContainer.classList.add('toast_container');

        const toast = document.createElement('div');
        toast.classList.add('toast', type);
        const icon = getTypeIcon(type);

        toast.innerHTML = `
            <i class="${icon}"></i>
            <span>${message}</span>
        `;

        appElement.appendChild(toastContainer);
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toastContainer.remove();
        }, 3000);
    }

    const success = (message) => {
        createToast(message, types.success);
    }
    const error = () => {
        createToast(message, types.error);
    }
    const warning = () => {
        createToast(message, types.warning);
    }
    const info = () => {
        createToast(message, types.info);
    }

    const getTypeIcon = (toastType) => {
        let icon;
        switch (toastType) {
            case types.success:
                icon = 'fa-solid fa-circle-check';
                break;
            case types.error: 
                icon = 'fa-solid fa-circle-exclamation';
                break;
            case types.warning: 
                icon = 'fa-solid fa-triangle-exclamation';
                break;
            case types.info: 
                icon = 'fa-solid fa-circle-info';
                break;
        }
        return icon;
    }

    return {
        createToast,
        success,
        warning,
        error,
        info,
    }
}

export default useToast;