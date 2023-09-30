# Ramu Ki Sabji 
## Data Definitions

## Admin DFD Tables

1. **Admin_acc** (1 to 1 relation, only one entity can use)

   | No. | Field Name | Data Type   | Constraint    | Description               |
   | --- | ---------- | ----------- | ------------- | ------------------------- |
   | 1   | username   | Varchar(20) | Primary Key   | Admin name for login      |
   | 2   | password   | Varchar(20) | Not null      | Password for login        |

2. **Category_Mst** (1 to M relation, both admin and user can use)

   | No. | Field Name    | Data Type   | Constraint    | Description           |
   | --- | ------------- | ----------- | ------------- | --------------------- |
   | 1   | Category_id   | int         | Primary Key   | Category ID           |
   | 2   | Category_name | Varchar(20) | Not null      | Category name         |

3. **Sub-category_mst** (1 to M relation, both admin and user can use)

   | No. | Field Name       | Data Type   | Constraint    | Description                   |
   | --- | ---------------- | ----------- | ------------- | ----------------------------- |
   | 1   | Sub_Category_id  | int         | Primary Key   | Sub-category ID               |
   | 2   | Sub_Category_name| Varchar(20) | Not null      | Sub-category name             |
   | 3   | Category_id      | int         | Foreign Key   | Reference from Category master|

4. **Product** (1 to M relation, both admin and user can use)

   | No. | Field Name       | Data Type   | Constraint    | Description                   |
   | --- | ---------------- | ----------- | ------------- | ----------------------------- |
   | 1   | Pro_id           | int         | Primary Key   | Product ID                    |
   | 2   | Pro_name         | Varchar(20) | Not null      | Product name                  |
   | 3   | Pro_img          | img         | Not null      | Product image                 |
   | 4   | Sub_Category_id  | int         | Foreign Key   | Reference from Sub-category   |
   | 5   | price            | int         | Not null      | Product price                 |
   | 6   | stock            | int         | Default(0)    | Product stock count           |
   | 7   | pro_dis          | Varchar(50) | Not null      | Product detail description    |

5. **Order** (1 to M relation, both admin and user can use)

   | No. | Field Name     | Data Type  | Constraint    | Description                 |
   | --- | -------------- | ---------- | ------------- | --------------------------- |
   | 1   | O_id           | int        | Primary Key   | Order ID                    |
   | 2   | U_id           | int        | Foreign Key   | Reference from User Account |
   | 3   | Pro_id         | int        | Foreign Key   | Reference from Product_mst |
   | 4   | Address        | Varchar(50)| Not null      | House/build no. + street    |
   | 5   | city           | Varchar(20)| Not null      | Delivery city information   |
   | 6   | state_code     | Varchar(5) | Default="GUJ"| State information           |
   | 7   | Zip_code       | number(6)  | Not null      | Delivery city zip code      |
   | 8   | mobile         | number(10) | Not null      | Customer contact number     |
   | 9   | total_est      | number(5)  | Not null      | Total order price estimate  |
   | 10  | quantity       | number(2)  | Not null      | Quantity of product         |

6. **User_Acc** (1 to M relation, both admin and user can use)

   | No. | Field Name | Data Type   | Constraint   | Description        |
   | --- | ---------- | ----------- | ------------ | ------------------ |
   | 1   | U_id       | int         | Primary Key  | User ID            |
   | 2   | Username   | Varchar(20) | Not null     | User name           |
   | 3   | Password   | Varchar(15) | Not null     | Password            |
   | 4   | Email      | Varchar(30) | Unique       | User email          |

7. **Feedback** (1 to M relation, both admin and user can use)

   | No. | Field Name | Data Type   | Constraint   | Description               |
   | --- | ---------- | ----------- | ------------ | ------------------------- |
   | 1   | F_id       | int         | Primary Key  | Feedback ID               |
   | 2   | U_id       | int         | Default=null | Customer ID               |
   | 3   | Email      | Varchar(30) | Not null     | Email info                |
   | 4   | Date       | Date        | Auto         | Feedback issue date       |
   | 5   | Mobile     | Number(10)  | Not null     | User contact mobile       |
   | 6   | Msg        | Varchar(200)| Not null     | Feedback given by the user|
