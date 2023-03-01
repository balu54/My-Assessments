from django.shortcuts import render
import re
import spacy

nlp = spacy.load("en_core_web_lg")
vocab = nlp.vocab
# # Create your views here.
# text = "using spacy remove clean and give an complete statmet without mistakes this is my first proj!@#@ on DJang@ and its Vey# interse@#"


def home(request):
    return render(request, "home.html")


def result(request):
    paragraph = request.GET["name"]

    clean_paragraph = re.sub(r'[^\w\s]', '', paragraph)

    doc = nlp(clean_paragraph)

    # def correct_stat(text):
        # doc = nlp(text)
        # clean_text = ""
        # for token in doc:
        #     if not token.is_punct and not token.is_space:
        #         clean_token = token.text.lower().strip()
        #         if clean_token == "djang":
        #             clean_token = "Django"
        #         clean_text += clean_token + " "
        #
        # # Print the cleaned-up text
        # return clean_text.strip()

    # result = correct_stat(clean_paragraph)
    return render(request, "result.html", {"cleaned": clean_paragraph})
