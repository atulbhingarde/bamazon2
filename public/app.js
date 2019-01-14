let onHand;

// retreive the inventory and render it to the screen in #inStock html class
const renderInventory = function(dbStock){
  $('#articles').empty();
  console.log('render was launched');
console.log(dbStock);
onHand = dbStock;
console.log(onHand);

    $(document).ready(function() {
      $('#inStock').DataTable( {

        data: dbStock,    
          columns: [
              { data: "item_id" },
              { data: "product_name" },
              { data: "price" },
              { data: "stock_quantity" }
              ]
      } );
    });
  };
  
  

const retreiveInventory = function() {
  $.get('/api/stock').then(renderInventory);
};
// get the inventoty listed 
retreiveInventory();
const placeOrder = function(event)
 {
  event.preventDefault();
  const order = [];
  console.log(onHand);
  //console.log(onHand[4]);
  console.log('submit is pressed.');
  item = document.getElementById("Product ID").value;
  qty = document.getElementById("Quantity").value;
  console.log(item);
  console.log(qty);
  alert('This is item ' + item + " " + qty ) ; 

  // Save the shopper input in an object called 'order'
  order.push( {
    'item': item,
    'qty': qty
  });

  console.log(order);
  let orderProduct = item-1;
  let orderQuantity = qty;
  let qtyInStock = onHand[orderProduct].stock_quantity;
  console.log(qtyInStock+ " "+ onHand.length);

  if ( qtyInStock >= orderQuantity ) 
   {
    Cost = (orderQuantity * onHand[orderProduct].price);
    alert('Yes we can service that order, your cost will be $'  + `${Cost}` + " price " + onHand[orderProduct].price +" name " + onHand[orderProduct].product_name ) ;
    // update db to update the order quantity
    newQtyStock = parseInt(onHand[orderProduct].stock_quantity - orderQuantity);
    console.log(" new stock shoud be " + newQtyStock);
    alert('/api/stock/'+`${orderProduct}`);
    
    $.ajax(
    {  
      url: `/api/quantity/${item}`,  
      type: 'PUT',  
      dataType: 'JSON',  
      data: {stock_quantity: `${newQtyStock}`},  
      
    }).then(location.reload());
 
   }
   else { /* we can not process the otrder as stock is unsufficient */ 
          alert('Sorry, we do not have sufficient stock to fulfil that order. in hand ' + qtyInStock + ' stock at present ' + orderQuantity );
        }


    // Blank our inputs after POST
    $('#Product ID').val('');
    $('#Quantity').val('');
};
// on click place the order with the input from item number and quanity
$('#article-btn').on('click', placeOrder);

