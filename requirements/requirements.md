# Demo Web Shop – Requirements Document

**Product:** Tricentis Demo Web Shop  
**Source:** https://demowebshop.tricentis.com/  
**Document status:** Initial baseline for functional testing and Playwright automation  
**Observed:** 7 September 2026

## 1. Purpose

This document defines the functional  plawright  requirements and initial test scope for the public Demo Web Shop. It is intended to guide manual test design, Playwright automation, regression coverage, and traceability from business capability to test case.

The requirements are based on the publicly accessible storefront. Because this is a demo site, catalogue data, prices, availability, and page content may change without notice.

## 2. Product overview

The application is an online shopping storefront. A customer can browse product categories, search and filter products, inspect product details, add items to a cart or wishlist, create an account, sign in, and proceed through checkout. The site also exposes customer-service and informational pages.

## 3. Scope

### In scope

- Public home page and shared navigation
- Product categories and subcategories
- Product listing, sorting, display mode, price filtering, and pagination behavior where available
- Product detail pages, configurable products, quantity, reviews, tags, and related products
- Product search and advanced-search criteria
- Registration, login, logout, password recovery entry point, and account navigation
- Shopping cart, wishlist, and checkout journey
- Newsletter subscription and community poll controls
- Informational and customer-service pages
- Cross-browser functional checks using Playwright

### Out of scope for this baseline

- Admin/back-office features
- Payment-provider integration or real financial transactions
- Production security, performance, load, and penetration testing
- Exact catalogue inventory, prices, review counts, and marketing copy
- Social-media systems linked from the storefront
- Accessibility certification; accessibility checks remain recommended test coverage

## 4. User roles

| Role | Description |
| --- | --- |
| Guest customer | Can browse, search, view products, and use public shopping features. Authentication may be required for selected account or checkout actions. |
| Registered customer | Can sign in and use customer account features such as orders and addresses. |
| Administrator | Not covered by this storefront requirements baseline. |

## 5. Site map and major workflows

### Primary navigation

The storefront exposes Register, Log in, Shopping cart, Wishlist, search, and category navigation. Categories observed include Books, Computers, Electronics, Apparel & Shoes, Digital downloads, Jewelry, and Gift Cards. Computers includes Desktops, Notebooks, and Accessories; Electronics includes Camera, photo and Cell phones.

### Core customer journeys

1. Browse category → select product → view product details.
2. Search keyword → review results → open product.
3. Select product configuration and quantity → add to cart → update/remove item.
4. Add product to wishlist → review wishlist; authentication behavior should be verified.
5. Register → sign in → open account, orders, or addresses.
6. Cart → address → shipping → payment → confirmation → complete order.
7. Open an information or customer-service page from the footer.

## 6. Functional requirements

### FR-001 – Home page

The system shall display the storefront home page with store branding, welcome content, featured products, category navigation, search access, cart/wishlist links, and footer information links.

**Acceptance criteria:**

- The page loads successfully over HTTPS.
- The page title and primary store heading are displayed.
- Featured products expose a product name, price, and product action where applicable.
- Category links navigate to the corresponding category page.
- The cart and wishlist counters are visible and reflect the current session state.

### FR-002 – Category navigation

The system shall allow customers to navigate from a category or subcategory link to a product listing page.

**Acceptance criteria:**

- The selected category heading is displayed.
- The listing contains products or a clear empty-state message.
- Computer and Electronics subcategories are reachable from their parent navigation.
- The customer can return to the home page and continue browsing.

### FR-003 – Product listing

The system shall display products for a selected category and provide available presentation and filtering controls.

**Acceptance criteria:**

- Products show a name, price, and product link or action.
- View mode, sort order, and page-size controls operate when present.
- Price filters return products within the selected price range when matching products exist.
- The selected filter or sort state is retained in the resulting page where supported.

### FR-004 – Product details

The system shall display detailed information for a selected product.

**Acceptance criteria:**

- The product name, image, price, availability, and shipping information are displayed when provided.
- A customer can select required product options before adding a configurable product to the cart.
- Quantity can be entered or adjusted.
- Add-to-cart and wishlist actions are available according to product and authentication rules.
- Review, product-tag, and related-product links navigate correctly when present.

### FR-005 – Search

The system shall allow customers to search the catalogue using a keyword.

**Acceptance criteria:**

- A non-empty keyword can be submitted from the shared search control or search page.
- Relevant results are displayed for a known product keyword.
- No-match searches display a clear no-results state.
- Search results can be refined using advanced-search fields when enabled, including category, subcategory, manufacturer, price range, and product-description search.
- Blank or invalid search submissions produce appropriate validation or a safe result.

### FR-006 – Registration

The system shall allow a new customer to register with personal details and credentials.

**Acceptance criteria:**

- Gender, first name, last name, email, password, and confirm-password fields are available as applicable.
- Required fields are validated.
- Email format and password confirmation are validated.
- A unique valid registration completes successfully in a controlled environment.
- Duplicate email and invalid credential scenarios show actionable errors.

**Test-environment note:** Do not create uncontrolled accounts on the public demo site. Registration automation should use a controlled environment or an approved disposable test account.

### FR-007 – Login and logout

The system shall authenticate registered customers using email and password.

**Acceptance criteria:**

- Valid credentials sign the customer in and expose authenticated navigation.
- Invalid credentials show an error without authenticating the customer.
- The Remember me option can be selected when present.
- Forgot-password navigation is available.
- Logout ends the authenticated session and restores guest navigation.

### FR-008 – Customer account

The system shall provide authenticated customers with account information and order/address navigation.

**Acceptance criteria:**

- Unauthenticated access to protected account pages redirects to login or shows an access message.
- Authenticated customers can reach account information, orders, and addresses.
- Address create, edit, and delete behavior is validated in a controlled account.
- Customer data is not exposed between accounts.

### FR-009 – Shopping cart

The system shall allow a customer to manage selected products in a shopping cart.

**Acceptance criteria:**

- Adding a product updates the cart counter and cart contents.
- The cart displays product, unit price, quantity, and line total where applicable.
- Quantity changes recalculate totals.
- Removing an item updates the cart and counter.
- An empty cart displays a clear empty-state message.
- Cart state is preserved according to the site’s guest/session behavior.

### FR-010 – Wishlist

The system shall allow a customer to add and review products in a wishlist according to authentication rules.

**Acceptance criteria:**

- The wishlist counter updates after a successful add.
- The wishlist displays the selected product and available actions.
- Removing an item updates the wishlist state.
- Guest and authenticated behavior is explicitly validated.

### FR-011 – Checkout

The system shall guide an eligible customer through the checkout stages shown by the cart flow: Cart, Address, Shipping, Payment, Confirm, and Complete.

**Acceptance criteria:**

- The customer cannot complete checkout without required cart, address, shipping, and payment information.
- Required-field validation is displayed at the relevant step.
- The selected shipping and payment choices are retained through confirmation.
- The confirmation page summarizes the order before completion.
- A successful controlled checkout displays a completion result and order reference where provided.
- The order appears in the authenticated customer’s order history when the environment supports persistence.

**Test-environment note:** Use approved test data only. Do not submit real payment details or create uncontrolled orders on the public demo site.

### FR-012 – Newsletter and community poll

The system shall expose newsletter subscription and community-poll controls where displayed.

**Acceptance criteria:**

- A valid newsletter email can be submitted in a controlled environment.
- Invalid or blank newsletter input shows validation.
- A customer can select one poll option and submit it when the poll is active.
- The result or confirmation state is displayed after submission.

### FR-013 – Informational and customer-service pages

The system shall provide navigation to Sitemap, Shipping & Returns, Privacy Notice, Conditions of Use, About us, Contact us, Search, News, Blog, Recently viewed products, Compare products list, and New products where links are displayed.

**Acceptance criteria:**

- Each displayed link navigates to the expected page or a valid external destination.
- The destination page has a meaningful heading and does not return an unexpected error.
- Protected account links follow the authentication behavior defined in FR-008.

## 7. Non-functional requirements

| ID | Requirement |
| --- | --- |
| NFR-001 | All storefront traffic shall use HTTPS. |
| NFR-002 | Primary customer workflows shall be usable on supported desktop and mobile viewport sizes. |
| NFR-003 | Interactive controls shall expose meaningful labels, roles, focus behavior, and validation messages for accessibility testing. |
| NFR-004 | The UI shall provide clear feedback for loading, success, validation, empty, and error states. |
| NFR-005 | Automated tests shall use stable, user-facing locators where possible and state-based waits instead of fixed delays. |
| NFR-006 | Test data shall be isolated and cleaned up when a workflow changes server-side state. |
| NFR-007 | Browser coverage shall include Chromium, Firefox, and WebKit for critical journeys where the environment supports them. |

## 8. Business rules and validations to confirm

- Required registration and checkout fields must not accept empty submissions.
- Email addresses must satisfy the application’s accepted format.
- Password and confirm-password values must match.
- A product cannot be ordered beyond available stock, when inventory enforcement is enabled.
- Product configuration options marked required must be selected before adding to cart.
- Cart totals must reflect quantity, price, discounts, shipping, and applicable tax rules.
- Checkout must reject incomplete or invalid address, shipping, and payment data.
- Account-only features must not reveal another customer’s data.
- Product, price, inventory, review, and promotional values are environment data, not fixed acceptance-test constants.

## 9. Traceability starter matrix

| Capability | Requirement IDs | Suggested Playwright coverage |
| --- | --- | --- |
| Home and navigation | FR-001, FR-002, FR-013 | Home load, category navigation, footer links |
| Search and catalogue | FR-003, FR-004, FR-005 | Valid/invalid search, filters, product details |
| Identity | FR-006, FR-007, FR-008 | Validation, valid/invalid login, protected pages |
| Shopping | FR-009, FR-010 | Add/update/remove cart item, wishlist state |
| Order placement | FR-011 | Checkout validation and controlled happy path |
| Engagement | FR-012 | Newsletter and poll validation |

## 10. Risks, assumptions, and open questions

### Risks

- The public demo site can change its data, content, or availability.
- Tests that register users, add orders, or modify account data can create shared state and interfere with other runs.
- Public-site rate limits or transient network errors can make end-to-end tests unreliable.

### Assumptions

- The public storefront is the system under test; admin behavior is excluded.
- Product and price values are dynamic unless a test provisions controlled data.
- Authentication and checkout tests will use isolated, approved test data.

### Open questions

- Which browsers and viewport sizes are officially supported?
- What are the exact shipping, tax, discount, inventory, and payment rules for the target environment?
- Which account and checkout workflows may be automated against the public demo site?
- Should guest users be allowed to add to wishlist or proceed to checkout?
- What are the expected retention and cleanup policies for test accounts, carts, and orders?
- What accessibility conformance level is required?

## 11. Source observations

The home page exposes registration, login, cart, wishlist, search, category navigation, featured products, newsletter, community poll, and footer links. The registration page exposes gender, first name, last name, email, password, and confirm-password fields. The login page exposes returning-customer email/password fields, Remember me, and Forgot password. The Books category exposes view, sort, display-count, price-filter, and advanced catalogue navigation. A product detail page exposes availability, shipping, reviews, configurable options, quantity, price, tags, and related products. The empty cart exposes the staged checkout labels Cart, Address, Shipping, Payment, Confirm, and Complete.

