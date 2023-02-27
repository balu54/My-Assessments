import re
import requests
from bs4 import BeautifulSoup


# html = requests.get("https://craft.co/search?layout=list&order=size_desc&q=")
# soup = BeautifulSoup(html.text, "html.parser")

with open(r"C:\Users\balu5\OneDrive\Desktop\html projects\E42_assesment\main.html", "r") as f:
    html = f.read()
soup = BeautifulSoup(html, "html.parser")

ol_tags = soup.find("ul", class_="_Ux1X")
company_details = ol_tags.find_all("li", class_="_2US_W")

# pattern = r"(?<=companies)[A-Za-z\s]+"
# pattern = r"((?<=companies)[A-Za-z\s]+)Employees(?P<employees>[0-9,]+)"
pattern = r"CompareYou can compare up to 12 companies(?P<name>[a-zA-Z.\s]+)HQ(?P<hq>[a-zA-Z\s,]+)Employees(?P<employees>[0-9,]+)"
# pattern = r"(?P<name>[a-zA-Z0-9\s&.]+)HQ(?P<hq>[a-zA-Z\s,]+)Employees(?P<employees>[0-9,]+)"
# pattern = r"companies(.+)"
data = {}
for i in company_details:
    comp = {}
    # print(i.text.strip())
    match = re.search(pattern,i.text.strip())
    if match:
        name = match.group("name")
        hq = match.group("hq")
        employees = match.group("employees")
        comp["Comapny Name"] = name
        comp["Head Quarters"] = hq
        comp["Employees"] = employees
        data[name] = comp
# print(data)
for company_name,details in data.items():
    print(company_name,"\n", "*"*100,"\n",details,"\n")

