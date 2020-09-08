document.getElementById('buttonID').addEventListener('click', (e) => {
    let containerEl = document.querySelector('.container');
    
    if (containerEl.style.flexDirection === 'row') {
        containerEl.style.flexDirection = 'column';
    } else {
        containerEl.style.flexDirection = 'row';
    }
});