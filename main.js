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
  $card.classList.add('card')
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
  var $cardBodyPrice = document.createElement('h6')
  $cardBodyPrice.classList.add('card-text')
  $cardBodyPrice.textContent = '$' + item.price

  $cardBody.appendChild($cardBodyHeader)
  $cardBody.appendChild($cardBodyPrice)

  $card.appendChild($cardBody)

  return $card
}

function renderGridCatalog(catalog) {
  var $gridContainer = document.createElement('div')
  $gridContainer.classList.add('container')

  var $renderHeader = document.createElement('h1')
  $renderHeader.classList.add('header-position')
  $renderHeader.textContent = 'Jamazon'
  $gridContainer.appendChild($renderHeader)

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
  $cartItemPrice.textContent = '$' + cart.price

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
  $cartSummaryTotalPrice.textContent = 'Total: $' + $cartPriceTotal
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
  else if (app.view === 'cart') {
    var $appendCheckout = document.querySelector("[data-view='checkout']")
    $appendCheckout.innerHTML = ''
    $appendCart.appendChild($renderHeader)
  }
  $renderCart.innerHTML = ''
  $renderCart.appendChild(renderCart(app.cart.item))
}

function renderCart(cart) {
  var $cart = document.createElement('div')
  $cart.classList.add('cart')

  var $cartHeader = document.createElement('span')
  $cartHeader.classList.add('nav-item')
  $cartHeader.textContent = 'Cart (' + cart.length + ')'
  $cart.appendChild($cartHeader)

  return $cart
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
  $cardPrice.textContent = '$' + item.price
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

renderAppState(app)

var $catalogView = document.querySelector("[data-view='catalog']")
$catalogView.addEventListener('click', (event) => {
  var $closestItem = event.target.closest('.card')
  var itemClicked = parseInt($closestItem.dataset.itemId, 16)
  if ($closestItem) {
    app.view = 'details'
    app.details.item = getObject(app.catalog.items, itemClicked)
    renderAppState(app)
  }
})

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
