import mysql.connector
# Create new entry in Person table

def get_person():
    firstname = input("FirstName: ")
    dob = input("DateOfBirth [MMDDYYYY]: ")
    sql = "SELECT * FROM person WHERE FirstName=%s AND DateOfBirth=%s"
    val = (firstname, dob)

    pharmCursor.execute(sql, val)
    result = pharmCursor.fetchall()

    for x in result:
        print(x)


pharmacydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="gamer",
    database="part"
)

print(pharmacydb)

pharmCursor = pharmacydb.cursor()

pharmCursor.execute("SHOW TABLES")

print("Tables available:")
for x in pharmCursor:
    print(x)

while (1 == 1):
    user_input = input("[1] - Get Person\n>")
    if (user_input == '1'):
        get_person()
