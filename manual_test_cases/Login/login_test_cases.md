# Manual Test Cases – Login and Logout

**Module:** Login / Logout  
**Requirement:** FR-007 – Login and logout, plus FR-008 protected-page access (see `requirements/requirements.md`)  
**Application:** https://demowebshop.tricentis.com/login  
**Prepared:** 24 October 2026  

> **Test data note:** Use one approved test account (`<TEST_EMAIL>` / `<TEST_PASSWORD>`), for example the account created in TC_REG_001. Don't write real passwords into this file; keep them in your local test-data or `.env` file.

The failed-login messages below were confirmed on the live site on 24 Oct 2026. Messages marked *(verify)* should be confirmed and recorded on the first run.

## Preconditions (all cases unless stated)

- A registered test account exists.
- The user is logged out (guest).
- The Login page is open: https://demowebshop.tricentis.com/login

## Summary

| TC ID | Title | Type | Priority |
| --- | --- | --- | --- |
| TC_LOGIN_001 | Login with valid email and password | Positive | High |
| TC_LOGIN_002 | Login page fields and controls are displayed | UI | High |
| TC_LOGIN_003 | Login with an unregistered email | Negative | High |
| TC_LOGIN_004 | Login with a registered email and wrong password | Negative | High |
| TC_LOGIN_005 | Login with both fields empty | Negative | High |
| TC_LOGIN_006 | Login with email empty | Negative | High |
| TC_LOGIN_007 | Login with password empty | Negative | High |
| TC_LOGIN_008 | Login with an invalid email format | Negative | Medium |
| TC_LOGIN_009 | Password is case-sensitive | Negative | Medium |
| TC_LOGIN_010 | Email with different letter case | Edge | Low |
| TC_LOGIN_011 | Remember me keeps the user signed in | Positive | Medium |
| TC_LOGIN_012 | Without Remember me, the session ends when the browser closes | Positive | Low |
| TC_LOGIN_013 | Forgot password link opens Password recovery | Navigation | Medium |
| TC_LOGIN_014 | Password field is masked | UI / Security | Medium |
| TC_LOGIN_015 | Logout ends the session and restores guest navigation | Positive | High |
| TC_LOGIN_016 | Browser Back after logout does not restore the session | Security | Medium |
| TC_LOGIN_017 | Protected account page redirects a guest to login | Security | High |
| TC_LOGIN_018 | Login from the header link and from checkout | Navigation | Medium |
| TC_LOGIN_019 | Guest cart is kept after login | Integration | Medium |
| TC_LOGIN_020 | Keyboard-only login (Tab order and Enter) | Accessibility | Low |

---

### TC_LOGIN_001 – Login with valid email and password

| Field | Value |
| --- | --- |
| Type / Priority | Positive / High |
| Test data | Email: `<TEST_EMAIL>`; Password: `<TEST_PASSWORD>` |

**Steps**
1. Enter the valid email and password.
2. Click **Log in**.

**Expected result**
- The user is taken to the home page (or the page they came from).
- The header shows the account email and **Log out**, and Register / Log in are no longer shown.

---

### TC_LOGIN_002 – Login page fields and controls are displayed

**Steps:** 1. Open the Login page.  
**Expected result**
- The heading **Welcome, Please Sign In!** is shown *(verify)*.
- The **New Customer** section has a **Register** button.
- The **Returning Customer** section shows Email, Password, the **Remember me?** checkbox, the **Forgot password?** link, and the **Log in** button.

---

### TC_LOGIN_003 – Login with an unregistered email

| Field | Value |
| --- | --- |
| Type / Priority | Negative / High |
| Test data | Email: `not.registered.qa@example.com`; Password: `Test@123` |

**Steps**
1. Enter the unregistered email and any password.
2. Click **Log in**.

**Expected result**
- The message `Login was unsuccessful. Please correct the errors and try again.` is shown with `No customer account found`.
- The user stays logged out on the Login page.

---

### TC_LOGIN_004 – Login with a registered email and wrong password

**Test data:** Email: `<TEST_EMAIL>`; Password: `Wrong@123`.  
**Steps:** 1. Enter the registered email with a wrong password. 2. Click **Log in**.  
**Expected result**
- `Login was unsuccessful. Please correct the errors and try again.` is shown with a reason stating that the credentials are incorrect *(verify exact text)*.
- The user stays logged out.

---

### TC_LOGIN_005 – Login with both fields empty

**Steps:** 1. Leave Email and Password empty. 2. Click **Log in**.  
**Expected result:** The login fails with an error message (no account found / please correct the errors), and the user stays logged out. Record the exact message.

---

### TC_LOGIN_006 – Login with email empty

**Test data:** Email blank; Password: `<TEST_PASSWORD>`.  
**Steps:** 1. Enter only the password. 2. Click **Log in**.  
**Expected result:** The login fails with an error, and the user stays logged out.

---

### TC_LOGIN_007 – Login with password empty

**Test data:** Email: `<TEST_EMAIL>`; Password blank.  
**Steps:** 1. Enter only the email. 2. Click **Log in**.  
**Expected result:** The login fails with an error, and the user stays logged out.

---

### TC_LOGIN_008 – Login with an invalid email format

**Test data (one run each):** `testuser`, `testuser@`, `@example.com`.  
**Steps:** 1. Enter an invalid email and any password. 2. Click **Log in**.  
**Expected result:** A `Wrong email` validation message or a login-failed error is shown, and the user is not logged in. Record which one appears.

---

### TC_LOGIN_009 – Password is case-sensitive

**Test data:** Email: `<TEST_EMAIL>`; Password: the correct password with its letter case changed (for example `test@123` instead of `Test@123`).  
**Steps:** 1. Enter the email and the case-changed password. 2. Click **Log in**.  
**Expected result:** The login fails, and the user stays logged out.

---

### TC_LOGIN_010 – Email with different letter case

**Test data:** Email: `<TEST_EMAIL>` in UPPERCASE; correct password.  
**Steps:** 1. Enter the uppercase email and the correct password. 2. Click **Log in**.  
**Expected result:** The login succeeds, because email addresses aren't case-sensitive. Record the result if it fails.

---

### TC_LOGIN_011 – Remember me keeps the user signed in

**Steps**
1. Enter valid credentials and tick **Remember me?**.
2. Click **Log in**.
3. Close the browser completely and reopen https://demowebshop.tricentis.com/.

**Expected result:** The user is still logged in, and the header shows the account email and **Log out**.

---

### TC_LOGIN_012 – Without Remember me, the session ends when the browser closes

**Steps**
1. Enter valid credentials and leave **Remember me?** unticked.
2. Click **Log in**.
3. Close the browser completely and reopen the site.

**Expected result:** The user is shown as a guest (Register / Log in are visible). Record the behavior if the session persists.

---

### TC_LOGIN_013 – Forgot password link opens Password recovery

**Steps:** 1. Click **Forgot password?**.  
**Expected result:** The Password recovery page opens at `/passwordrecovery` with an Email field and a **Recover** button. Do not submit it with a real email.

---

### TC_LOGIN_014 – Password field is masked

**Steps:** 1. Type `Test@123` into Password.  
**Expected result:** The field shows masked characters, never plain text.

---

### TC_LOGIN_015 – Logout ends the session and restores guest navigation

**Precondition:** The user is logged in (TC_LOGIN_001).  
**Steps:** 1. Click **Log out** in the header.  
**Expected result**
- The user is taken to the home page.
- The header shows **Register** and **Log in** again, and the account email is gone.

---

### TC_LOGIN_016 – Browser Back after logout does not restore the session

**Steps:** 1. Log in and open **My account** (`/customer/info`). 2. Click **Log out**. 3. Click the browser Back button, then refresh.  
**Expected result:** No account data is shown after refreshing, and the user is asked to log in.

---

### TC_LOGIN_017 – Protected account page redirects a guest to login

**Steps:** 1. While logged out, open https://demowebshop.tricentis.com/customer/info directly.  
**Expected result:** The user is redirected to the Login page (with a return URL), and no account details are shown. After logging in, the user is taken back to the account page.

---

### TC_LOGIN_018 – Login from the header link and from checkout

**Steps**
1. Click **Log in** in the header and confirm the Login page opens.
2. As a guest, add any product to the cart, open the Shopping cart, agree to the terms, and click **Checkout**.

**Expected result:** Both entry points show the login screen. Checkout offers login (and the other guest options shown), and logging in there continues the checkout.

---

### TC_LOGIN_019 – Guest cart is kept after login

**Steps:** 1. As a guest, add a product to the cart and note the cart count. 2. Log in with valid credentials.  
**Expected result:** The product is still in the cart after login, and the cart count includes it.

---

### TC_LOGIN_020 – Keyboard-only login (Tab order and Enter)

**Steps:** 1. Press Tab to move through Email, Password, Remember me, and Log in. 2. Enter valid credentials and press Enter.  
**Expected result:** Focus order is logical, each control shows a visible focus indicator, and pressing Enter logs the user in.
