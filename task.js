
        const offerCards = document.querySelectorAll('.offer-card');
        const radioBtns = document.querySelectorAll('.radio-btn');
        const totalDisplay = document.getElementById('total-price');

        const formatPrice = (price) => {
            const formattedPrice = parseFloat(price).toFixed(2);
            totalDisplay.textContent = `$${formattedPrice} USD`;
        };

        const handleCardSelection = (cardElement) => {
            offerCards.forEach(c => c.classList.remove('selected'));
            cardElement.classList.add('selected');
        };

        const initOfferSelect = () => {
            let checkedRadio = document.querySelector('.radio-btn:checked');
            if (checkedRadio) {
                let parentCard = checkedRadio.closest('.offer-card');
                if (parentCard) {
                    handleCardSelection(parentCard);
                    formatPrice(checkedRadio.value);
                }
            }
        };

        offerCards.forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'OPTION') {
                    const radio = this.querySelector('.radio-btn');
                    if (radio) {
                        radio.checked = true;
                        radio.dispatchEvent(new Event('change'));
                    }
                }
            });
        });

        radioBtns.forEach(radio => {
            radio.addEventListener('change', function() {
                handleCardSelection(this.closest('.offer-card'));
                formatPrice(this.value);
            });
        });

        initOfferSelect();
