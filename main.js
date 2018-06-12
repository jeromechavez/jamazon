/* eslint-disable no-unused-vars */

var app = {
  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        brand: 'Ludwig',
        name: 'Black Beauty',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://goo.gl/Q7X6VB'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  },
  cart: {
    item: []
  }
}

function renderCatalogItem(item) {
  var $card = document.createElement('div')
  $card.classList.add('card', 'col-3')
  $card.setAttribute('style', 'width: 18rem')
  $card.setAttribute('data-item-id', item.itemId)

  var $cardImg = document.createElement('img')
  $cardImg.classList.add('card-imt-top')
  $cardImg.setAttribute('src', item.imageUrl)
  $card.appendChild($cardImg)

  var $cardBody = document.createElement('div')
  $cardBody.classList.add('card-body')
  var $cardBodyHeader = document.createElement('h5')
  $cardBodyHeader.classList.add('card-title')
  $cardBodyHeader.textContent = item.name

  var $cardFooter = document.createElement('div')
  $cardFooter.classList.add('card-footer')

  var $cardBodyPrice = document.createElement('h6')
  $cardBodyPrice.classList.add('card-text')
  $cardBodyPrice.textContent = '$' + item.price.toFixed(2)
  $cardFooter.appendChild($cardBodyPrice)

  $cardBody.appendChild($cardBodyHeader)

  $card.appendChild($cardBody)
  $card.appendChild($cardFooter)

  return $card
}

function renderGridCatalog(catalog) {
  var $gridContainer = document.createElement('div')
  $gridContainer.classList.add('container')

  var $renderHeader = document.createElement('h1')
  $renderHeader.classList.add('header-position')
  $renderHeader.textContent = 'Jamazon'
  $gridContainer.appendChild($renderHeader)

  var sortingRow = document.createElement('div')
  sortingRow.classList.add('row')

  sortingRow.appendChild(renderPriceSort())
  sortingRow.appendChild(renderBrandSort())

  $gridContainer.appendChild(sortingRow)

  var $gridRow = document.createElement('div')
  $gridRow.classList.add('row')

  catalog.catalog.items.forEach(function (object, i) {
    let $cardObject = renderCatalogItem(catalog.catalog.items[i])
    $gridRow.appendChild($cardObject)
  })

  $gridContainer.appendChild($gridRow)

  return $gridContainer
}

function renderCartItem(cart) {
  var $cartItem = document.createElement('div')
  $cartItem.classList.add('card', 'w-50')

  var $cartRow = document.createElement('div')
  $cartRow.classList.add('row')

  var $cartImage = document.createElement('img')
  $cartImage.classList.add('cart-image')
  $cartImage.setAttribute('src', cart.imageUrl)
  $cartRow.appendChild($cartImage)

  var $cartItemBody = document.createElement('div')
  $cartItemBody.classList.add('card-body')

  var $cartItemName = document.createElement('h5')
  $cartItemName.classList.add('card-title')
  $cartItemName.textContent = cart.name

  var $cartItemBrand = document.createElement('h6')
  $cartItemBrand.classList.add('card-text', 'cart-brand')
  $cartItemBrand.textContent = 'Brand: ' + cart.brand

  var $cartItemPrice = document.createElement('h5')
  $cartItemPrice.classList.add('card-text', 'cart-price')
  $cartItemPrice.textContent = '$' + cart.price.toFixed(2)

  $cartItemBody.appendChild($cartItemName)
  $cartItemBody.appendChild($cartItemBrand)
  $cartItemBody.appendChild($cartItemPrice)

  $cartRow.appendChild($cartItemBody)
  $cartItem.appendChild($cartRow)
  return $cartItem
}

function renderCartSummary(cart) {
  var $cartContainer = document.createElement('div')
  $cartContainer.classList.add('container')

  var $cartSummaryHeader = document.createElement('h2')
  $cartSummaryHeader.classList.add('header-position', 'cart-header')
  $cartSummaryHeader.textContent = 'Cart'
  $cartContainer.appendChild($cartSummaryHeader)

  cart.item.forEach(function (object, i) {
    let $cartObject = renderCartItem(cart.item[i])
    $cartContainer.appendChild($cartObject)
  })

  var $cartTotal = document.createElement('h4')
  $cartTotal.classList.add('card-title')
  $cartTotal.textContent = 'Total: ' + cart.item.length + ' items'
  $cartContainer.appendChild($cartTotal)

  let $cartPriceTotal = 0
  cart.item.forEach(function (object, i) {
    $cartPriceTotal += cart.item[i].price
  })

  var $cartSummaryTotalPrice = document.createElement('h4')
  $cartSummaryTotalPrice.textContent = 'Total: $' + $cartPriceTotal.toFixed(2)
  $cartContainer.appendChild($cartSummaryTotalPrice)

  var $continueShop = document.createElement('button')
  $continueShop.classList.add('button')
  $continueShop.setAttribute('id', 'btn-continue')
  $continueShop.textContent = 'Continue Shopping'
  $cartContainer.appendChild($continueShop)

  var $checkout = document.createElement('button')
  $checkout.classList.add('button')
  $checkout.setAttribute('id', 'btn-checkout')
  $checkout.textContent = 'Checkout'
  $cartContainer.appendChild($checkout)

  return $cartContainer
}

function showView(view) {
  var $catalogView = document.querySelector("[data-view='catalog']")
  var $detailsView = document.querySelector("[data-view='details']")
  var $cartView = document.querySelector("[data-view='cart']")
  var $checkoutView = document.querySelector("[data-view='checkout']")
  if (view === 'details') {
    $catalogView.classList.add('hidden')
    $detailsView.classList.remove('hidden')
    $cartView.classList.add('hidden')
    $checkoutView.classList.add('hidden')
  }
  else if (view === 'catalog') {
    $catalogView.classList.remove('hidden')
    $detailsView.classList.add('hidden')
    $cartView.classList.add('hidden')
    $checkoutView.classList.add('hidden')
  }
  else if (view === 'cart') {
    $cartView.classList.remove('hidden')
    $catalogView.classList.add('hidden')
    $detailsView.classList.add('hidden')
    $checkoutView.classList.add('hidden')
  }
  else if (view === 'checkout') {
    $checkoutView.classList.remove('hidden')
    $catalogView.classList.add('hidden')
    $detailsView.classList.add('hidden')
    $cartView.classList.add('hidden')
  }
}

function renderAppState(catalog) {
  var $renderCart = document.querySelector('.container-cart')
  var $renderHeader = document.createElement('h1')
  $renderHeader.classList.add('header-position')
  $renderHeader.textContent = 'Jamazon'

  showView(app.view)

  if (app.view === 'catalog') {
    var $appendGrid = document.querySelector("[data-view='catalog']")
    $appendGrid.innerHTML = ''
    $appendGrid.appendChild(renderGridCatalog(catalog))
  }
  else if (app.view === 'details') {
    var $appendDetail = document.querySelector("[data-view='details']")
    $appendDetail.innerHTML = ''
    $appendDetail.appendChild($renderHeader)
    $appendDetail.appendChild(renderItemDetails(app.details.item))
  }
  else if (app.view === 'cart') {
    var $appendCart = document.querySelector("[data-view='cart']")
    $appendCart.innerHTML = ''
    $appendCart.appendChild($renderHeader)
    $appendCart.appendChild(renderCartSummary(app.cart))
  }
  else if (app.view === 'checkout') {
    var $appendCheckout = document.querySelector("[data-view='checkout']")
    $appendCheckout.innerHTML = ''
    $appendCheckout.appendChild($renderHeader)
    $appendCheckout.appendChild(renderCheckout(app.cart))
  }
  $renderCart.innerHTML = ''
  $renderCart.appendChild(renderCart(app.cart.item))
}

function renderCart(cart) {
  var $cart = document.createElement('nav')
  $cart.classList.add('nav-cart')

  var $cartHeader = document.createElement('span')
  $cartHeader.classList.add('nav-text')
  $cartHeader.textContent = 'Cart (' + cart.length + ')'
  $cart.appendChild($cartHeader)

  return $cart
}

function compareValues(key, order = 'asc') {
  return function (a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key]
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    }
    else if (varA < varB) {
      comparison = -1
    }
    return ((order === 'desc') ? (comparison * -1) : comparison
    )
  }
}

function renderPriceSort() {
  var dropDownForm = document.createElement('form')
  var dropDownContainer = document.createElement('div')
  dropDownContainer.classList.add('form-group')

  var dropDownGroup = document.createElement('select')
  dropDownGroup.classList.add('form-control')
  dropDownGroup.setAttribute('name', 'drop-down-sort')

  var allView = document.createElement('option')
  allView.textContent = 'Sort By'
  dropDownGroup.appendChild(allView)
  allView.setAttribute('value', 'unsorted')
  var lowToHighOpt = document.createElement('option')
  lowToHighOpt.textContent = 'Price: Low to High'
  lowToHighOpt.setAttribute('value', 'low-high')

  var highToLowOpt = document.createElement('option')
  highToLowOpt.textContent = 'Price: High to Low'
  highToLowOpt.setAttribute('value', 'high-low')

  dropDownGroup.appendChild(lowToHighOpt)
  dropDownGroup.appendChild(highToLowOpt)

  dropDownContainer.appendChild(dropDownGroup)
  dropDownForm.appendChild(dropDownContainer)

  return dropDownForm
}

function renderBrandSort() {
  var dropDownBrand = document.createElement('form')
  var containerBrand = document.createElement('div')
  containerBrand.classList.add('form-group')

  var brandSelect = document.createElement('select')
  brandSelect.classList.add('form-control')
  brandSelect.setAttribute('name', 'drop-down-brand')

  var brandView = document.createElement('option')
  brandView.textContent = 'Brands'
  brandSelect.appendChild(brandView)

  var ludwigBrand = document.createElement('option')
  ludwigBrand.textContent = 'Ludwig'
  ludwigBrand.setAttribute('value', 'ludwig')
  brandSelect.appendChild(ludwigBrand)

  var vatanBrand = document.createElement('option')
  vatanBrand.textContent = 'Vatan'
  vatanBrand.setAttribute('value', 'vatan')
  brandSelect.appendChild(vatanBrand)

  var remoBrand = document.createElement('option')
  remoBrand.textContent = 'Remo'
  remoBrand.setAttribute('value', 'remo')
  brandSelect.appendChild(remoBrand)

  var paisteBrand = document.createElement('option')
  paisteBrand.textContent = 'Paiste'
  paisteBrand.setAttribute('value', 'paiste')
  brandSelect.appendChild(paisteBrand)

  var sonorBrand = document.createElement('option')
  sonorBrand.textContent = 'Sonor'
  sonorBrand.setAttribute('value', 'sonor')
  brandSelect.appendChild(sonorBrand)

  var zildjianBrand = document.createElement('option')
  zildjianBrand.textContent = 'Zildjian'
  zildjianBrand.setAttribute('value', 'zildjian')
  brandSelect.appendChild(zildjianBrand)

  var meinlBrand = document.createElement('option')
  meinlBrand.textContent = 'Meinl'
  meinlBrand.setAttribute('value', 'meinl')
  brandSelect.appendChild(meinlBrand)

  var rolandBrand = document.createElement('option')
  rolandBrand.textContent = 'Roland'
  rolandBrand.setAttribute('value', 'roland')
  brandSelect.appendChild(rolandBrand)

  containerBrand.appendChild(brandSelect)
  dropDownBrand.appendChild(containerBrand)

  return dropDownBrand
}

function sortPrice(app, number) {
  if (number === 0) {
    app.catalog.items = app.catalog.items.sort(compareValues('price'))
  }
  else if (number === 1) {
    app.catalog.items = app.catalog.items.sort(compareValues('price', 'desc'))
  }
  return app
}

function renderItemDetails(item) {
  var $card = document.createElement('div')
  $card.classList.add('card')
  $card.setAttribute('id', 'centerDetail')

  var $cardImage = document.createElement('img')
  $cardImage.classList.add('card-img-top')
  $cardImage.setAttribute('src', item.imageUrl)
  $cardImage.setAttribute('atl', 'Card image cap')
  $card.appendChild($cardImage)

  var $cardBody = document.createElement('div')
  $cardBody.classList.add('card-body')

  var $cardHeader = document.createElement('h4')
  $cardHeader.classList.add('card-title')
  $cardHeader.textContent = item.name
  $cardBody.appendChild($cardHeader)

  var $cardBrand = document.createElement('h5')
  $cardBrand.classList.add('card-text')
  $cardBrand.textContent = item.brand
  $cardBody.appendChild($cardBrand)

  var $cardDescript = document.createElement('p')
  $cardDescript.classList.add('card-text')
  $cardDescript.textContent = item.description
  $cardBody.appendChild($cardDescript)

  var $cardDetails = document.createElement('p')
  $cardDetails.classList.add('card-text')
  $cardDetails.textContent = item.details
  $cardBody.appendChild($cardDetails)

  var $cardOrigin = document.createElement('h5')
  $cardOrigin.classList.add('card-text')
  $cardOrigin.textContent = item.origin
  $cardBody.appendChild($cardOrigin)

  var $cardPrice = document.createElement('h4')
  $cardPrice.classList.add('card-title')
  $cardPrice.textContent = '$' + item.price.toFixed(2)
  $cardBody.appendChild($cardPrice)

  var $addToCart = document.createElement('button')
  $addToCart.classList.add('button')
  $addToCart.setAttribute('id', 'btn-add')
  $addToCart.textContent = 'Add To Cart'
  $cardBody.appendChild($addToCart)

  var $continueShop = document.createElement('button')
  $continueShop.classList.add('button')
  $continueShop.setAttribute('id', 'btn-continue')
  $continueShop.textContent = 'Back'
  $cardBody.appendChild($continueShop)

  $card.appendChild($cardBody)
  return $card
}

function getObject(catalog, itemID) {
  return catalog.filter(item => item.itemId === itemID)[0]
}

function renderCheckout(cart) {
  var $checkoutContainer = document.createElement('div')
  $checkoutContainer.classList.add('container-checkout')

  var $checkoutHeader = document.createElement('h2')
  $checkoutHeader.classList.add('header-position', 'cart-header')
  $checkoutHeader.textContent = 'Checkout'
  $checkoutContainer.appendChild($checkoutHeader)

  var $checkoutForm = document.createElement('form')

  var $nameCol = document.createElement('div')
  $nameCol.classList.add('col')

  var $nameRow = document.createElement('div')
  $nameRow.classList.add('form-row')
  var $nameLabel = document.createElement('label')
  $nameLabel.textContent = 'Name'
  $nameRow.appendChild($nameLabel)
  var $nameInput = document.createElement('input')
  $nameInput.setAttribute('type', 'text')
  $nameInput.classList.add('form-control')
  $nameInput.setAttribute('placeholder', 'Name')
  $nameRow.appendChild($nameInput)
  $nameCol.appendChild($nameRow)
  $checkoutForm.appendChild($nameCol)

  var $addCol = document.createElement('div')
  $addCol.classList.add('col')

  var $addressRow = document.createElement('div')
  $addressRow.classList.add('form-row')
  var $addressLabel = document.createElement('label')
  $addressLabel.textContent = 'Address'
  $addressRow.appendChild($addressLabel)
  var $addressInput = document.createElement('input')
  $addressInput.setAttribute('type', 'text')
  $addressInput.classList.add('form-control')
  $addressInput.setAttribute('placeHolder', '1234 Main St')
  $addressRow.appendChild($addressInput)
  $addCol.appendChild($addressRow)
  $checkoutForm.appendChild($addCol)

  var $credCol = document.createElement('div')
  $credCol.classList.add('col')

  var $creditCardRow = document.createElement('div')
  $creditCardRow.classList.add('form-row')
  var $creditCardLabel = document.createElement('label')
  $creditCardLabel.textContent = 'Credit Card'
  $creditCardRow.appendChild($creditCardLabel)
  var $creditCardInput = document.createElement('input')
  $creditCardInput.setAttribute('type', 'text')
  $creditCardInput.classList.add('form-control')
  $creditCardInput.setAttribute('placeHolder', '1234 5678 1234 5678')
  $creditCardRow.appendChild($creditCardInput)
  $credCol.appendChild($creditCardRow)
  $checkoutForm.appendChild($credCol)

  var $submitOrder = document.createElement('button')
  $submitOrder.classList.add('button', 'submit-button')
  $submitOrder.setAttribute('id', 'btn-submit')
  $submitOrder.textContent = 'Submit Order'
  $checkoutForm.appendChild($submitOrder)

  $checkoutContainer.appendChild($checkoutForm)

  var $checkoutTotalItems = document.createElement('h4')
  $checkoutTotalItems.classList.add('checkout-items')
  $checkoutTotalItems.textContent = 'Total: ' + cart.item.length + ' items'
  $checkoutContainer.appendChild($checkoutTotalItems)

  let $checkoutPriceTotal = 0
  cart.item.forEach(function (object, i) {
    $checkoutPriceTotal += cart.item[i].price
  })

  var $checkoutTotalPrice = document.createElement('h4')
  $checkoutTotalPrice.classList.add('checkout-price')
  $checkoutTotalPrice.textContent = 'Total: $' + $checkoutPriceTotal.toFixed(2)
  $checkoutContainer.appendChild($checkoutTotalPrice)

  return $checkoutContainer
}

renderAppState(app)

var $catalogView = document.querySelector("[data-view='catalog']")
$catalogView.addEventListener('click', (event) => {
  var $closestItem = event.target.closest('.card')
  if ($closestItem) {
    var itemClicked = parseInt($closestItem.dataset.itemId, 16)
    app.view = 'details'
    app.details.item = getObject(app.catalog.items, itemClicked)
    renderAppState(app)
  }
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("[data-view='catalog']").onchange = changeEventHandler
}, false)

function changeEventHandler(event) {
  if (event.target.value === 'low-high') {
    renderAppState(sortPrice(app, 0))
  }
  else if (event.target.value === 'high-low') {
    renderAppState(sortPrice(app, 1))
  }
}

var $cartSummaryView = document.querySelector('.container-cart')
$cartSummaryView.addEventListener('click', (event) => {
  app.view = 'cart'
  renderAppState(app)
})

var $detailView = document.querySelector("[data-view='details']")
$detailView.addEventListener('click', (event) => {
  if (event.target.id === 'btn-add') {
    app.cart.item.push(app.details.item)
    renderAppState(app)
  }
  else if (event.target.id === 'btn-continue') {
    app.view = 'catalog'
    renderAppState(app)
  }
})

var $cartView = document.querySelector("[data-view='cart']")
$cartView.addEventListener('click', (event) => {
  if (event.target.id === 'btn-continue') {
    app.view = 'catalog'
    renderAppState(app)
  }
  else if (event.target.id === 'btn-checkout') {
    app.view = 'checkout'
    renderAppState(app)
  }
})

var $checkoutView = document.querySelector("[data-view='checkout']")
$checkoutView.addEventListener('submit', (event) => {
  alert('Order Received! Thank you for your order!')
  event.preventDefault()
})
