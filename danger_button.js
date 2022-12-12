<!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    .button:hover {
        background-color: #e53935; /* Error red */
    }
    </style>
    </head>
    <body>

    <h2>Button with error message on hover</h2>

    <button class="button" onmouseover="alert('404 Error: Page not found')">Danger</button>

    </body>
</html>