// Builder Pattern for Laptop
class LaptopBuilder {
  constructor() {
    this.laptop = {};
  }

  setProcessor(processor) {
    this.laptop.processor = processor;
    return this;
  }

  setRAM(ram) {
    this.laptop.ram = ram;
    return this;
  }

  setStorage(storage) {
    this.laptop.storage = storage;
    return this;
  }

  setGraphicsCard(gpu) {
    this.laptop.gpu = gpu;
    return this;
  }

  setDisplay(display) {
    this.laptop.display = display;
    return this;
  }

  setOS(os) {
    this.laptop.os = os;
    return this;
  }

  setWarranty(warranty) {
    this.laptop.warranty = warranty;
    return this;
  }

  addAccessories(accessories) {
    this.laptop.accessories = accessories;
    return this;
  }

  build() {
    return this.laptop;
  }
}

// Handle form submission
document.getElementById('laptopForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const processor = document.getElementById('processor').value;
  const ram = document.getElementById('ram').value;
  const storage = document.getElementById('storage').value;
  const gpu = document.getElementById('gpu').value;
  const display = document.getElementById('display').value;
  const os = document.getElementById('os').value;
  const warranty = document.getElementById('warranty').value;
  const accessories = Array.from(document.querySelectorAll('input[name="accessories"]:checked')).map(a => a.value);

  const laptop = new LaptopBuilder()
    .setProcessor(processor)
    .setRAM(ram)
    .setStorage(storage)
    .setGraphicsCard(gpu)
    .setDisplay(display)
    .setOS(os)
    .setWarranty(warranty)
    .addAccessories(accessories)
    .build();

  // Display Summary
  document.getElementById('summary').innerHTML = `
    <h2>🛠️ Your Custom Laptop:</h2>
    <p><strong>Processor:</strong> ${laptop.processor}</p>
    <p><strong>RAM:</strong> ${laptop.ram}</p>
    <p><strong>Storage:</strong> ${laptop.storage}</p>
    <p><strong>Graphics:</strong> ${laptop.gpu}</p>
    <p><strong>Display:</strong> ${laptop.display}</p>
    <p><strong>Operating System:</strong> ${laptop.os}</p>
    <p><strong>Warranty:</strong> ${laptop.warranty}</p>
    <p><strong>Accessories:</strong> ${laptop.accessories.length ? laptop.accessories.join(", ") : "None"}</p>
  `;
});
