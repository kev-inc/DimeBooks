export default function PaymentDetails() {
  return (
    <div>
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="First Name" />
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Last Name" />
        </div>
      </div>
      <div class="field">
        <label class="label">Email Address</label>
        <div class="control">
          <input class="input" type="text" placeholder="Email Address" />
        </div>
      </div>

      <div class="field">
        <label class="label">Address</label>
        <div class="control">
          <input class="input" type="text" placeholder="Address Line 1" />
          <input class="input" type="text" placeholder="Address Line 2" />
        </div>
      </div>

      <div class="field">
        <label class="label">Postal Code</label>
        <div class="control">
          <input class="input" type="text" placeholder="Postal Code" />
        </div>
      </div>
    </div>
  );
}
