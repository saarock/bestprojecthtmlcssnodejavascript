import datetime
import b


class Equipment:
    def __init__(self, name, brand, price, quantity):
        self.name = name
        self.brand = brand
        self.price = price
        self.quantity = quantity

class RentalShop:
    def __init__(self):
        self.equipment_list = []
        self.load_equipment_data()

    def load_equipment_data(self):
        # Read equipment data from the text file and populate the equipment_list
        with open("equipment_data.txt", "r") as file:
            for line in file:
                data = line.strip().split(", ")
                name, brand, price, quantity = data
                self.equipment_list.append(Equipment(name, brand, float(price), int(quantity)))

    def save_equipment_data(self):
        # Save updated equipment data back to the text file
        with open("equipment_data.txt", "w") as file:
            for equipment in self.equipment_list:
                file.write(f"{equipment.name}, {equipment.brand}, {equipment.price}, {equipment.quantity}\n")

    def rent_equipment(self, customer_name, equipment_name):
        equipment = None
        for eq in self.equipment_list:
            if eq.name == equipment_name and eq.quantity > 0:
                equipment = eq
                break

        if equipment is not None:
            rental_date = datetime.datetime.now()
            due_date = rental_date + datetime.timedelta(days=5)
            rental_amount = equipment.price
            equipment.quantity -= 1
            self.save_equipment_data()

            invoice = f"Rental Invoice\n\nCustomer: {customer_name}\nEquipment: {equipment.name} ({equipment.brand})\nRental Date: {rental_date}\nDue Date: {due_date}\nTotal Amount: ${rental_amount}"
            with open("invoices.txt", "a") as file:
                file.write(invoice + "\n\n")
        else:
            print("Equipment not available for rental.")

    def return_equipment(self, customer_name, equipment_name, rental_date):
        equipment = None
        for eq in self.equipment_list:
            if eq.name == equipment_name:
                equipment = eq
                break

        if equipment is not None:
            return_date = datetime.datetime.now()
            rental_duration = (return_date - rental_date).days
            fine = 0
            if rental_duration > 5:
                fine = (rental_duration - 5) * 10  # $10 fine per day

            rental_amount = equipment.price + fine
            equipment.quantity += 1
            self.save_equipment_data()

            invoice = f"Return Invoice\n\nCustomer: {customer_name}\nEquipment: {equipment.name} ({equipment.brand})\nReturn Date: {return_date}\nRental Duration: {rental_duration} days\nFine: ${fine}\nTotal Amount: ${rental_amount}"
            with open("invoices.txt", "a") as file:
                file.write(invoice + "\n\n")
        else:
            print("Equipment not found.")

if __name__ == "__main__":
    shop = RentalShop()

    while True:
        print("1. Rent Equipment\n2. Return Equipment\n3. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            customer_name = input("Enter customer name: ")
            equipment_name = input("Enter equipment name: ")
            shop.rent_equipment(customer_name, equipment_name)
        elif choice == "2":
            customer_name = input("Enter customer name: ")
            equipment_name = input("Enter equipment name: ")
            rental_date = datetime.datetime.strptime(input("Enter rental date (YYYY-MM-DD): "), "%Y-%m-%d")
            shop.return_equipment(customer_name, equipment_name, rental_date)
        elif choice == "3":
            break
        else:
            print("Invalid choice.")

