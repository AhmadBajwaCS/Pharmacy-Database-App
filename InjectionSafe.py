import mysql.connector


# Create new entry in Person table
def add_person():
    sql = "INSERT INTO person (FirstName, LastName, SSN, Address, DateOfBirth) VALUES (%s, %s, %s, %s, %s)"

    # get user input for each field
    firstname = input("FirstName: ")
    lastname = input("LastName: ")
    ssn = input("SSN: ")
    address = input("Address: ")
    dob = input("DateOfBirth [MMDDYYYY]: ")

    val = (firstname, lastname, ssn, address, dob)
    mycursor.execute(sql, val)

    pharmacydb.commit()

    print(mycursor.rowcount, "record inserted.")


def get_person():
    firstname = input("FirstName: ")
    dob = input("DateOfBirth [MMDDYYYY]: ")
    sql = "SELECT * FROM person WHERE FirstName='" + \
          firstname + "' AND DateOfBirth='" + dob + "'"

    mycursor.execute(sql)
    result = mycursor.fetchall()

    for x in result:
        print(x)


def update_person():
    firstname = input("Input FirstName: ")
    current_dob = input("Input Current DateOfBirth [MMDDYYYY]: ")
    new_dob = input("Input New DateOfBirth [MMDDYYYY]: ")
    sql = "UPDATE person SET DateOfBirth='" + new_dob + "' WHERE FirstName='" + \
          firstname + "' AND DateOfBirth='" + current_dob + "'"

    mycursor.execute(sql)
    pharmacydb.commit()
    print(mycursor.rowcount, "record(s) affected")


pharmacydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="gamer",
    database="part"
)

print(pharmacydb)

mycursor = pharmacydb.cursor()

mycursor.execute("SHOW TABLES")

print("Tables available:")
for x in mycursor:
    print(x)

while (1 == 1):
    user_input = input("[1] - Add Person \n[2] - Get Person \n[3] - Update Person \n>")
    if (user_input == '1'):
        add_person()
    elif (user_input == '2'):
        get_person()
    elif (user_input == '3'):
        update_person()
