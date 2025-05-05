describe('Go Backend API Tests', () => {
    const baseUrl = 'http://localhost:8080';

    describe('Products API', () => {
        it('should fetch all products', () => {
            cy.request(`${baseUrl}/products`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.be.gte(0);
                if (response.body.length > 0) {
                    expect(response.body[0]).to.have.all.keys('category', 'category_id', 'id', 'name', 'price');
                }
            });
        });

        it('should fetch a product by ID', () => {
            cy.request(`${baseUrl}/products/1`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', 1);
                expect(response.body).to.have.property('name');
                expect(response.body).to.have.property('price');
            });
        });

        it('should create a new product', () => {
            cy.request('POST', `${baseUrl}/products`, {
                name: 'Test Product',
                price: 100,
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('name', 'Test Product');
                expect(response.body).to.have.property('price', 100);
            });
        });

        it('should update a product', () => {
            cy.request('PUT', `${baseUrl}/products/1`, {
                name: 'Updated Product',
                price: 150,
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', 'Updated Product');
                expect(response.body).to.have.property('price', 150);
            });
        });

        it('should delete a product', () => {
            cy.request('DELETE', `${baseUrl}/products/1`).then((response) => {
                expect(response.status).to.eq(204);
            });
        });
    });

    describe('Carts API', () => {
        it('should fetch all carts', () => {
            cy.request(`${baseUrl}/carts`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
            });
        });

        it('should fetch a cart by ID', () => {
            cy.request(`${baseUrl}/carts/3`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', 3);
                expect(response.body).to.have.property('products');
                expect(response.body.products).to.be.an('array');
            });
        });

        it('should create a new cart', () => {
            cy.request('POST', `${baseUrl}/carts`, {
                products: [{ id: 1 }],
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('products');
                expect(response.body.products[0]).to.have.property('id', 1);
            });
        });

        it('should update a cart', () => {
            cy.request('PUT', `${baseUrl}/carts/2`, {
                products: [{ id: 2 }],
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.products[0]).to.have.property('id', 2);
            });
        });

        it('should clear a cart', () => {
            cy.request('PUT', `${baseUrl}/carts/2/clear`).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    });

    describe('Categories API', () => {
        it('should create a new category', () => {
            cy.request('POST', `${baseUrl}/categories`, {
                name: 'Test Category'
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('name', 'Test Category');
                expect(response.body).to.have.property('id');
            });
        });

        it('should fetch all categories', () => {
            cy.request(`${baseUrl}/categories`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
            });
        });

        it('should fetch a category by ID', () => {
            cy.request('POST', `${baseUrl}/categories`, {
                name: 'Fetchable Category'
            }).then((postResponse) => {
                const id = postResponse.body.id;
                cy.request(`${baseUrl}/categories/${id}`).then((getResponse) => {
                    expect(getResponse.status).to.eq(200);
                    expect(getResponse.body).to.have.property('id', id);
                    expect(getResponse.body).to.have.property('name', 'Fetchable Category');
                });
            });
        });

        it('should update a category', () => {
            cy.request('POST', `${baseUrl}/categories`, {
                name: 'Old Category Name'
            }).then((postResponse) => {
                const id = postResponse.body.id;
                cy.request('PUT', `${baseUrl}/categories/${id}`, {
                    name: 'Updated Category Name'
                }).then((putResponse) => {
                    expect(putResponse.status).to.eq(200);
                    expect(putResponse.body.name).to.eq('Updated Category Name');
                });
            });
        });

        it('should delete a category', () => {
            cy.request('POST', `${baseUrl}/categories`, {
                name: 'Category to Delete'
            }).then((postResponse) => {
                const id = postResponse.body.id;
                cy.request('DELETE', `${baseUrl}/categories/${id}`).then((deleteResponse) => {
                    expect(deleteResponse.status).to.eq(204);
                });
            });
        });
    });

    describe('Payments API', () => {
        it('should create a new payment', () => {
            cy.request('POST', `${baseUrl}/payments`, {
                products: [{ id: 1 }]
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('products');
                expect(response.body.products[0]).to.have.property('id', 1);
            });
        });

        it('should fetch all payments', () => {
            cy.request(`${baseUrl}/payments`).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
            });
        });

        it('should fetch a payment by ID', () => {
            cy.request('POST', `${baseUrl}/payments`, {
                products: [{ id: 1 }]
            }).then((postResponse) => {
                const id = postResponse.body.id;
                cy.request(`${baseUrl}/payments/${id}`).then((getResponse) => {
                    expect(getResponse.status).to.eq(200);
                    expect(getResponse.body).to.have.property('id', id);
                    expect(getResponse.body.products).to.be.an('array');
                });
            });
        });

        it('should update a payment', () => {
            cy.request('POST', `${baseUrl}/payments`, {
                products: [{ id: 1 }]
            }).then((postResponse) => {
                const id = postResponse.body.id;
                cy.request('PUT', `${baseUrl}/payments/${id}`, {
                    products: [{ id: 2 }]
                }).then((putResponse) => {
                    expect(putResponse.status).to.eq(200);
                    expect(putResponse.body.products[0]).to.have.property('id', 2);
                });
            });
        });

        it('should delete a payment', () => {
            cy.request('POST', `${baseUrl}/payments`, {
                products: [{ id: 1 }]
            }).then((postResponse) => {
                const id = postResponse.body.id;
                cy.request('DELETE', `${baseUrl}/payments/${id}`).then((deleteResponse) => {
                    expect(deleteResponse.status).to.eq(204);
                });
            });
        });
    });

    describe('Negative Tests', () => {
        it('should return 404 for a non-existent product', () => {
            cy.request({
                url: `${baseUrl}/products/9999`,
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(404);
            });
        });

        it('should return 404 for a non-existent cart', () => {
            cy.request({
                url: `${baseUrl}/carts/9999`,
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(404);
            });
        });

        it('should return 405 for unsupported HTTP method', () => {
            cy.request({
                method: 'PATCH',
                url: `${baseUrl}/products/1`,
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(405);
            });
        });
    });
});
