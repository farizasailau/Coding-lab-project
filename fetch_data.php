
<?php
include('dbcon.php');
if(isset($_POST["action"]))
{
    $query = $conn->query("SELECT * FROM product");
    if(isset($_POST["minimum_price"], $_POST["maximum_price"]) && !empty($_POST["minimum_price"]) && !empty($_POST["maximum_price"]))
    {
        $query = $conn->query("SELECT * FROM product WHERE price BETWEEN '".$_POST["minimum_price"]."' AND '".$_POST["maximum_price"]."'");
    }
    $total_row = mysqli_num_rows($query);
    $output = '';
    if($total_row > 0){
        while ($row = $query ->fetch_object()) {
            $output .= '
             <div class="col-md-4">
                 <div style="border:1px solid #ccc; border-radius:5px; padding:16px; margin-bottom:16px; height:320px;">
                     <img src="images/'. $row->image .'" alt="" class="img-responsive" >
                     <p align="center"><strong><a href="#">'. $row->name .'</a></strong></p>
                     <h4 style="text-align:center;" class="text-danger" >'. $row->price .'</h4>
                     <p align="center"><strong><a href="#">'. $row->description .'</a></strong></p>
                 </div>
                 <footer class="product-footer">
                             <div class="product-sizes">
                                 <button class="product-size is-active">Half a cake </button>
                                 <button class="product-size">Standard cake </button>
                                 <button class="product-size">Large cake </button>
                             </div>
                             <div class="product-bottom">
                                 <div class="product-price">
                                     <span class="product-currency">'. $row->price .'</span>
                                     <span class="product-currency">&#8376</span>
                                 </div>
                                 <a href="#" class="hero-button product-btn">Add to cart</a>
                             </div>
                     </footer>
             </div>';

            // $output .= '
            // <div class="catalogue">
            //     <div class="catalogue-item"">
            //         <div class="product catalogue-product">
            //             <img src="images/'. $row->image .'" alt="" class="img-responsive" >
            //             <p align="center"><strong><a href="#">'. $row->name .'</a></strong></p>
            //             <h4 style="text-align:center;" class="text-danger" >'. $row->price .'</h4>     
            //         </div>
            //         <footer class="product-footer">
            //                 <div class="product-sizes">
            //                     <button class="product-size is-active">Half a cake </button>
            //                     <button class="product-size">Standard cake </button>
            //                     <button class="product-size">Large cake </button>
            //                 </div>
            //                 <div class="product-bottom">
            //                     <div class="product-price">
            //                         <span class="product-currency">'. $row->price .'</span>
            //                         <span class="product-currency">&#8376</span>
            //                     </div>
            //                     <a href="#" class="hero-button product-btn"> Buy</a>
            //                 </div>
            //         </footer>
            //     </div>
            // </div>';
        }
    }else{
        $output = '<h3>No Data Found</h3>';
    }
    echo $output;
}
?>