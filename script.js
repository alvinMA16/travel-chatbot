// 当文档加载完成时运行脚本
document.addEventListener('DOMContentLoaded', function() {
    // 为所有消息建议按钮添加点击效果
    const suggestionButtons = document.querySelectorAll('.message-suggestions button');
    suggestionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 模拟点击后的视觉反馈
            this.style.backgroundColor = '#1a44c2';
            this.style.color = 'white';
            setTimeout(() => {
                this.style.backgroundColor = '';
                this.style.color = '';
            }, 300);
        });
    });

    // 为所有发送按钮添加点击效果
    const sendButtons = document.querySelectorAll('.send-button');
    sendButtons.forEach(button => {
        button.addEventListener('click', function() {
            const inputField = this.parentElement.querySelector('input');
            if (inputField && inputField.value.trim() !== '') {
                // 模拟发送消息的视觉反馈
                this.style.color = '#4caf50';
                setTimeout(() => {
                    this.style.color = '';
                    inputField.value = ''; // 清空输入框
                }, 300);
            }
        });
    });

    // 为所有输入框添加回车键发送功能
    const inputFields = document.querySelectorAll('.input-field input');
    inputFields.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim() !== '') {
                const sendButton = this.parentElement.parentElement.querySelector('.send-button');
                if (sendButton) {
                    // 触发发送按钮的点击效果
                    sendButton.click();
                }
            }
        });
    });

    // 为分享按钮添加点击效果
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 模拟点击后的视觉反馈
            this.style.opacity = '0.8';
            setTimeout(() => {
                this.style.opacity = '';
            }, 300);
        });
    });

    // 为行程卡片添加点击展开/收起效果
    const itineraryCards = document.querySelectorAll('.itinerary-card');
    itineraryCards.forEach(card => {
        card.addEventListener('click', function() {
            // 模拟点击后的视觉反馈
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}); 