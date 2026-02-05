How does TypeScript enforce type safety in this object-oriented program?

    It makes it easier to catch problems in the code before deployment? By creating 
    specific definitions for syntax to avoid, for example, putting strings where numbers
    should be. 

How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

    I didn't have to rewrite the base (product) multiple times, so I could adjust
    PhysicalProduct and DigitalProduct, and could use it for other code that needs 
    the Product Details, like if we made SubscriptionProduct. Very efficient.

What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

    It prevents people from being able to mess with that data, have access to information that should otherwise 
    be unavailable, and in general keep the product database safe from hackers or accidental changes.

If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

    I can create a new file, for the purpose of a SubscriptionProduct extended class, and with
    poly's help, I can call upon the Product file and class to give me the information without
    needing to repeat myself. I guess, it is similiar to question 2?