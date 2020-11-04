# Task 4

- Updated services: **ProductService**, **ProductService**,.
- Added pipes: **OrderByPipe**.
- Used pipes:
  - **AsyncPipe** - in the **ProductListComponent** to transform Promise result;
  - **UpperCasePipe** - in the **ProductComponent** to transform product categories;
  - **TitleCasePipe** in the **AppComponent** to transform app title fom component class;
  - **CurrnecyPipe** - in **ProductComponent**, **CartItemComponet**, **CartListComponent**;
  - **OrderByPipe** - in the **CartListComponent** to order cart items;
- Performed reorganization of module imports.
- Minor fixes of UI and code.

# Task 3

- Added services: **ConfigOptionsService**, **Constants**, **GeneratorService**, **LocalStorageService**.
- Added directives: **ApplyStylesDirective** that uses **Renderrer2** to manipulate DOM.
- Added components: **FirsComponet** to test injection methods.
- Updated services: **CartService**.
- Updated components: **CartItemComponet** & **CartListComponent**.
- Used derective **ApplyStylesDirective** on app title to chage styles on click event.
- Minor updated of UI.

# Task 2

- Created modules: **CoreModule**, **SharedModule**, **CartModule**, **ProductsModule**, **OrdersModule**.
- Updated services: **CartService** - to notify componets via "Push" method, added total price calculation.
- Added/Updated components: **CartItemComponet** & **ProductItemComponent** to use "OnPush" change detection strategy.
- Addde directives: **ClickStopDirective**, **HighliteDirective**
- Used life-cycle hooks: **OnInit**, **OnDestroy**, **AfterViewInit**
- Used templateVariable to get accces to native HTML elemet and set app title in the **AppComponent**.
- Used class(ngClass) & style(ngStyle) directives in the **AppComponent**.
- Updated UI.

# Task 1

- Created components:
  1.  FirstComponent - displays own properties;
  2.  ProductComponent - contains 'Buy' btn and has click handler;
  3.  ProductListComponent - displays product list using injectable service;
  4.  CartListComponent - displays cart list using injectable service & ngIf-else derective.
- Created services:
  1.  ProductsService - has 'getProducts()' method that returns dummy products;
  2.  CartService - has 'getItems()' method that returns dummy items.
- Added 'changelog.md' file;
- Added Cart clear functional;

P.S.: No project organization performed.
