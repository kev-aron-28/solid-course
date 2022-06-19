(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    
    class ProductService {
        private httpAdapter: Object;

        getProduct(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product );
        }
    }
    
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
            
        }

        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['kev@hotmail.com'], 'to-admins')
        }
    
    }

    class Mailer {
        
        private masterEmail: string = 'kevaron@hotmail.com';

        sendEmail(emailList:string[], tempate: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes');
        }    
    }

    class CartBloc {
        private itemsIncart: Object[];
        
        
        addToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    

    const mailer = new Mailer();
    const productService = new ProductService();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10)








})();