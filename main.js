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
  }
}

function renderCatalogItem(item) {
  var $card = document.createElement('div')
  $card.classList.add('card')
  $card.setAttribute('style', 'width: 18rem')

  var $cardImg = document.createElement('img')
  $cardImg.classList.add('card-imt-top')
  $cardImg.setAttribute('src', item.imageUrl)
  $card.appendChild($cardImg)

  var $cardBody = document.createElement('div')
  $cardBody.classList.add('card-body')
  var $cardBodyHeader = document.createElement('h5')
  $cardBodyHeader.classList.add('card-title')
  $cardBodyHeader.textContent = item.name
  var $cardBodyPrice = document.createElement('p')
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

  var $gridHeader = document.createElement('h1')
  $gridHeader.textContent = 'Jamazon'
  $gridContainer.appendChild($gridHeader)

  var $gridRow = document.createElement('div')
  $gridRow.classList.add('row')

  catalog.catalog.items.forEach(function (object, i) {
    let $cardObject = renderCatalogItem(catalog.catalog.items[i])
    $gridRow.appendChild($cardObject)
  })

  $gridContainer.appendChild($gridRow)

  return $gridContainer
}

function appendGridCatalog(catalog) {
  var $appendGrid = document.querySelector("[data-view='catalog']")
  $appendGrid.appendChild(renderGridCatalog(catalog))
}

function domItem(item) {
  var $modalItem = document.createElement('div')
  $modalItem.classList.add('modal')
  $modalItem.setAttribute('tabindex', '-1')
  $modalItem.setAttribute('role', 'dialog')

  var $modalItemDialog = document.createElement('div')
  $modalItemDialog.classList.add('modal-dialog')
  $modalItemDialog.setAttribute('role', 'document')

  var $modalItemContent = document.createElement('div')
  $modalItemContent.classList.add('modal-content')

  var $modalItemHeader = document.createElement('div')
  $modalItemHeader.classList.add('modal-header')

  var $modalItemTitle = document.createElement('h5')
  $modalItemTitle.classList.add('modal-title')
  $modalItemTitle.textContent = item.name

  var $modalItemButton = document.createElement('button')
  $modalItemButton.setAttribute('type', 'button')
  $modalItemButton.classList.add('close')
  $modalItemButton.setAttribute('data-dismiss', 'modal')
  $modalItemButton.setAttribute('aria-label', 'Close')

  var $modalItemButtonText = document.createElement('span')
  $modalItemButtonText.setAttribute('aria-hidden', 'true')
  $modalItemButtonText.textContent = '&times;'
  $modalItemButton.appendChild($modalItemButtonText)

  $modalItemHeader.appendChild($modalItemTitle)
  $modalItemHeader.appendChild($modalItemButton)
  $modalItemContent.appendChild($modalItemHeader)

  var $modalItemBody = document.createElement('div')
  $modalItemBody.classList.add('modal-body')
  var $modalItemImage = document.createElement('img')
  $modalItemImage.setAttribute('src', item.imageUrl)
  var $modalItemBrand = document.createElement('h6')
  $modalItemBrand.textContent = 'Brand: ' + item.brand
  var $modalItemPrice = document.createElement('p')
  $modalItemPrice.textContent = '$' + item.price
  var $modalItemDescription = document.createElement('p')
  $modalItemDescription.textContent = 'Description: ' + item.description
  var $modalItemDetails = document.createElement('p')
  $modalItemDetails.textContent = 'Details: ' + item.details
  var $modalItemOrigin = document.createElement('p')
  $modalItemOrigin.textContent = 'Origin: ' + item.origin

  $modalItemBody.appendChild($modalItemImage)
  $modalItemBody.appendChild($modalItemBrand)
  $modalItemBody.appendChild($modalItemPrice)
  $modalItemBody.appendChild($modalItemDescription)
  $modalItemBody.appendChild($modalItemDetails)
  $modalItemBody.appendChild($modalItemOrigin)

  $modalItemContent.appendChild($modalItemBody)
  $modalItemDialog.appendChild($modalItemContent)
  $modalItem.appendChild($modalItemDialog)

  return $modalItem
}

function getObject(catalog, itemID) {
  return catalog.filter(item => item.itemId === itemID)[0]
}

appendGridCatalog(app)
console.log(domItem(app.catalog.items[1]))
console.log(getObject(app.catalog.items, 2))
