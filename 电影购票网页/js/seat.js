
    const filmSelect = document.getElementById('filmSelect');
    const movieTimeSelect = document.getElementById('movieTimeSelect');
    const seatContainer = document.getElementById('seatContainer');
    const seatNumbers = document.getElementById('seatNumbers');
    const ticketCount = document.getElementById('ticketCount');
    const totalPrice = document.getElementById('totalPrice');
    let selectedSeats = [];

    
    function generateSeats() {
      for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
          const seat = document.createElement('div');
          seat.classList.add('seat');
          seat.textContent = i + '排' + j + '座';
          seat.addEventListener('click', function () {
            toggleSeatSelection(seat);
          });
          seatContainer.appendChild(seat);
        }
      }
    }

    // 座位选择状态
    function toggleSeatSelection(seat) {
      if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        const seatIndex = selectedSeats.indexOf(seat.textContent);
        if (seatIndex!== -1) {
          selectedSeats.splice(seatIndex, 1);
        }
      } else {
        seat.classList.add('selected');
        selectedSeats.push(seat.textContent);
      }
      updateSeatNumbers();
      updateTicketCountAndTotalPrice();
    }

    // 更新座位
    function updateSeatNumbers() {
      seatNumbers.textContent = '';
      selectedSeats.forEach(seat => {
        const seatText = document.createElement('p');
        seatText.textContent = seat;
        seatNumbers.appendChild(seatText);
      });
    }

    // 更新总计
    function updateTicketCountAndTotalPrice() {
      const ticketCountValue = selectedSeats.length;
      const totalPriceValue = ticketCountValue * 50;
      ticketCount.textContent = ticketCountValue;
      totalPrice.textContent = totalPriceValue;
    }

    // 初始化
    generateSeats();

    
   

   