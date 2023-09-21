import sys





class shop_rental:
    def __init__(self, options):
        self.options = options

    


    def book(self, eq):
        '''
        algorithm for booking equipments
        '''
        c_name = input('Costumer Name: ' )
        q_ = eq.split('')
        print(q_)
        print(f'Your Equipment: {eq} How many Quantity you want out of ')
        
        
        
    
    def rental_things(self):
        '''
        rental things        
        '''
        try:
            n = 0
            with open('equipment_data.txt') as file:
                eq = file.readlines()
                for i in eq:
                    n+=1
                    print(f'{n}: ',i)
                name_of_equipment = input('Equipment Number: ')
                if(int(name_of_equipment) == 1):
                    self.book(eq[0])
                elif(int(name_of_equipment) == 2):
                    self.book(eq[1])
                elif(int(name_of_equipment) == 3):
                    self.book(eq[2])
                elif(int(name_of_equipment) == 4):
                    self.book(eq[3])
                elif(int(name_of_equipment) == 5):
                    self.book(eq[4])
                    
        except Exception as e:
            print(e)


    def return_rental_things(self):
        '''
        return the rental things
        '''
        try:
            pass
        except Exception as e:
            print(e)

    
    def exist(self):
        '''
        Exist the program
        '''
        try:
            sys.exit()
        except Exception as e:
            print(e)



    def show_options(self):
        '''
        Show the option 
        '''
        try:
            for i in self.options:
                print(i)
            choose = input('Choose the option through the numbers: 1 or 2 or 3:  ')
            if(int(choose) == 1):
                # Calling the rental_things functions where user can rent the things
                self.rental_things()
            elif(int(choose) == 2):
                # Calling the function for returning the rental things
                self.return_rental_things()
            elif(int(choose) == 3):
                # Calling the exist function
                self.exist()
            else:
                print('Try again')
                # Using recursion if any things worng
                self.show_options()

        except Exception as e:
            print('Try again')
            self.show_options()

    



# Step 1 (CALL THE CLASS)

let = shop_rental(['1: Rent Equipment', '2: Return Rent Equipment', '3: Exist'])
# step 2 (CALL THE FUNCTION TO SHOW THE OPTION)
let.show_options()
