# Manual Test Cases – Registration

**Module:** Registration  
**Requirement:** FR-006 – Registration (see `requirements/requirements.md`)  
**Application:** https://demowebshop.tricentis.com/register  
**Prepared:** 24 October 2026  

> **Test data note:** Per FR-006, do not create uncontrolled accounts on the public demo site. Use a controlled environment or an approved disposable test email (for example `qa.<yourname>+<date>@example.com`) for the cases that complete a registration (TC_REG_001, TC_REG_002, TC_REG_014, TC_REG_017).

Validation messages quoted below were read from the live register page on 24 Oct 2026. Messages marked *(verify)* are server-side and should be confirmed and recorded on the first run.

## Preconditions (all cases unless stated)

- The user is logged out (guest).
- Browser cache and cookies are cleared, or a fresh incognito window is used.
- The Register page is open: https://demowebshop.tricentis.com/register

## Summary

| TC ID | Title | Type | Priority |
| --- | --- | --- | --- |
| TC_REG_001 | Register with all valid details | Positive | High |
| TC_REG_002 | Register without selecting gender | Positive | Medium |
| TC_REG_003 | Register page fields and controls are displayed | UI | High |
| TC_REG_004 | Submit the form with all fields empty | Negative | High |
| TC_REG_005 | First name left empty | Negative | High |
| TC_REG_006 | Last name left empty | Negative | High |
| TC_REG_007 | Email left empty | Negative | High |
| TC_REG_008 | Invalid email format | Negative | High |
| TC_REG_009 | Password left empty | Negative | High |
| TC_REG_010 | Password shorter than 6 characters | Negative | High |
| TC_REG_011 | Password of exactly 6 characters (boundary) | Boundary | Medium |
| TC_REG_012 | Confirm password does not match | Negative | High |
| TC_REG_013 | Confirm password left empty | Negative | High |
| TC_REG_014 | Register with an email that already exists | Negative | High |
| TC_REG_015 | Leading/trailing spaces in email | Edge | Low |
| TC_REG_016 | Password fields are masked | UI / Security | Medium |
| TC_REG_017 | New account can log in after registering | End-to-end | High |
| TC_REG_018 | Register link from the header opens the Register page | Navigation | Medium |
| TC_REG_019 | Keyboard-only registration (Tab order and Enter) | Accessibility | Low |

---

### TC_REG_001 – Register with all valid details

| Field | Value |
| --- | --- |
| Type / Priority | Positive / High |
| Test data | Gender: Male; First name: `Test`; Last name: `User`; Email: unique approved test email; Password: `Test@123`; Confirm password: `Test@123` |

**Steps**
1. Select Gender **Male**.
2. Enter First name, Last name, and Email.
3. Enter Password and Confirm password.
4. Click **Register**.

**Expected result**
- Registration completes and a confirmation page is shown stating the registration is complete *(verify exact text)*, with a **Continue** button.
- The header shows the registered email address and a **Log out** link instead of Register / Log in.

---

### TC_REG_002 – Register without selecting gender

| Field | Value |
| --- | --- |
| Type / Priority | Positive / Medium |
| Test data | Gender: none; all other fields valid; unique email |

**Steps**
1. Leave both gender options unselected.
2. Fill all other fields with valid data.
3. Click **Register**.

**Expected result**
- Registration completes successfully. Gender is optional, and no gender validation message is shown.

---

### TC_REG_003 – Register page fields and controls are displayed

| Field | Value |
| --- | --- |
| Type / Priority | UI / High |

**Steps**
1. Open the Register page.
2. Review the form.

**Expected result**
- Page heading **Register** is shown.
- **Your Personal Details** section shows Gender (Male / Female radio buttons), First name, Last name, and Email.
- **Your Password** section shows Password and Confirm password.
- Required fields are marked with an asterisk (*).
- The **Register** button is visible and enabled.

---

### TC_REG_004 – Submit the form with all fields empty

| Field | Value |
| --- | --- |
| Type / Priority | Negative / High |

**Steps**
1. Leave every field empty.
2. Click **Register**.

**Expected result**
- No account is created, and the user stays on the Register page.
- These messages are shown next to their fields:
  - `First name is required.`
  - `Last name is required.`
  - `Email is required.`
  - `Password is required.`
  - Confirm password shows its required message *(verify text)*.

---

### TC_REG_005 – First name left empty

**Test data:** All fields valid except First name is blank.  
**Steps:** 1. Fill all fields except First name. 2. Click **Register**.  
**Expected result:** `First name is required.` is shown, and no account is created.

---

### TC_REG_006 – Last name left empty

**Test data:** All fields valid except Last name is blank.  
**Steps:** 1. Fill all fields except Last name. 2. Click **Register**.  
**Expected result:** `Last name is required.` is shown, and no account is created.

---

### TC_REG_007 – Email left empty

**Test data:** All fields valid except Email is blank.  
**Steps:** 1. Fill all fields except Email. 2. Click **Register**.  
**Expected result:** `Email is required.` is shown, and no account is created.

---

### TC_REG_008 – Invalid email format

| Field | Value |
| --- | --- |
| Type / Priority | Negative / High |
| Test data (one run each) | `testuser`, `testuser@`, `@example.com`, `test user@example.com`, `test@@example.com` |

**Steps**
1. Fill all fields with valid data, but enter one of the invalid emails.
2. Click **Register** (or move focus out of the Email field).
3. Repeat for each invalid value.

**Expected result**
- `Wrong email` is shown under Email for every value.
- No account is created.

---

### TC_REG_009 – Password left empty

**Test data:** Password and Confirm password blank; other fields valid.  
**Steps:** 1. Leave Password empty. 2. Click **Register**.  
**Expected result:** `Password is required.` is shown, and no account is created.

---

### TC_REG_010 – Password shorter than 6 characters

| Field | Value |
| --- | --- |
| Type / Priority | Negative / High |
| Test data | Password: `Ab1@x` (5 chars); Confirm password: `Ab1@x` |

**Steps**
1. Fill valid personal details.
2. Enter the 5-character password in both password fields.
3. Click **Register**.

**Expected result**
- `The password should have at least 6 characters.` is shown.
- No account is created.

---

### TC_REG_011 – Password of exactly 6 characters (boundary)

**Test data:** Password and Confirm password: `Ab1@xy` (6 chars); unique email.  
**Steps:** 1. Fill all fields using the 6-character password. 2. Click **Register**.  
**Expected result:** No password-length error is shown, and registration completes successfully.

---

### TC_REG_012 – Confirm password does not match

| Field | Value |
| --- | --- |
| Type / Priority | Negative / High |
| Test data | Password: `Test@123`; Confirm password: `Test@124` |

**Steps**
1. Fill valid personal details.
2. Enter different values in Password and Confirm password.
3. Click **Register**.

**Expected result**
- `The password and confirmation password do not match.` is shown.
- No account is created.

---

### TC_REG_013 – Confirm password left empty

**Test data:** Password: `Test@123`; Confirm password blank.  
**Steps:** 1. Fill everything except Confirm password. 2. Click **Register**.  
**Expected result:** A required-field message is shown for Confirm password *(verify text)*, and no account is created.

---

### TC_REG_014 – Register with an email that already exists

| Field | Value |
| --- | --- |
| Type / Priority | Negative / High |
| Precondition | An account already exists for the test email (for example, the one from TC_REG_001). |

**Steps**
1. Fill all fields with valid data, using the existing email.
2. Click **Register**.

**Expected result**
- An error states that the email already exists *(verify exact text)*.
- No second account is created, and the user stays on the Register page.

---

### TC_REG_015 – Leading/trailing spaces in email

**Test data:** Email: `  <unique approved email>  ` (with spaces before and after).  
**Steps:** 1. Fill all fields, adding spaces around the email. 2. Click **Register**.  
**Expected result:** The spaces are trimmed and registration succeeds, or a clear validation message is shown. It must not fail without an error. Record which behavior happens.

---

### TC_REG_016 – Password fields are masked

**Steps:** 1. Type `Test@123` into Password and Confirm password.  
**Expected result:** Both fields show masked characters, never plain text.

---

### TC_REG_017 – New account can log in after registering

| Field | Value |
| --- | --- |
| Type / Priority | End-to-end / High |
| Precondition | TC_REG_001 passed; note its email and password. |

**Steps**
1. Click **Log out**.
2. Click **Log in** and enter the email and password from TC_REG_001.
3. Click **Log in**.

**Expected result**
- The login succeeds, and the header shows the registered email and **Log out**.

---

### TC_REG_018 – Register link from the header opens the Register page

**Steps:** 1. Open https://demowebshop.tricentis.com/. 2. Click **Register** in the header.  
**Expected result:** The Register page opens at `/register` with the heading **Register**.

---

### TC_REG_019 – Keyboard-only registration (Tab order and Enter)

**Steps:** 1. Press Tab to move through the form fields in order. 2. Fill each field with valid data using the keyboard. 3. Press Enter on the **Register** button.  
**Expected result:** Focus moves in a logical order (Gender, First name, Last name, Email, Password, Confirm password, Register), each field shows a visible focus indicator, and the form submits.
