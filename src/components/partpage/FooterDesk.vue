<template>
  <footer class="foot xl:m-auto MobHide">
    <router-link to="/" class="block MobHide bg-contain bg-center bg-no-repeat">
      <svg class="svgLogoBottom mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           width="179" height="46"
           viewBox="0 0 179 46">
        <image class="LogoBottom m-auto" data-name="Logo Perchini" width="179" height="46"
               xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAuCAYAAABj7ChuAAANAklEQVR4nO1dCdRVVRX+gN9IRS4O2HHnS0GNFKfCRBIFdKkpjoTimCalaCbikOFcliJmmmaOGEoqpaFWS8EpM1lOiT+oZeKAXNyeJJEnqCGSra3fxcPjvul//3v8Pu+31r/+O5x7xn322Xufs/dDPSHi9q9H9iKuR73yLihnfxH3+XqXE5R3cAPL2lbEfaWB5dW9bZ3rnH+9CK5HHfMOYWU0jJgBNIyYAWwLoGHE3Ii21ZuYM2RoGDJiztA0yIg5Q9MgI+YMTYOMmDM0DVoqbQhNVN0ALFT1H7R3B8SI1gDQFUA+h/z/6tHBIm5NAKsBeFvV11SGiLO+6w7gLVX/YZE01l99AawOYBmAZ1X9W20sby0AS1T9+7XUu8KyugBYW9X/p95lsTyzTi1S9ctqyadFxG0JYBSALwLoBGAxgONU/SIRZ/eHADgBQH9y8vki7khVf0+tjYgRbcm89wCwMR8vixHNADA+h/zt1eQn4qYBGEKCNYxT9WNF3HAAPwLQj8+XiLjHAEwAcHM1hC3iIgA/B3AYifQlEXeEqn80Jfkc9uk6vL8AwJlVtml3AL+kGc3qfSmAMwonkIjbFMAuANbgo3mqvtr++xyAn9r4G+MScVb/g1X94ylpdwCwHRmi1eV+Vf9cleWdwP5wxhRE3Kmq/oaUdF8HsH0wrk+r+r8WpjPi/CqABQA2A7AfB2ldzpZ7bbABfAGA8pueAG4ll2sTYkSdYkTnA2gFcKzVF8CfAFwO4C/spNtiRMdVmf9FAAYG9zYgkywvcv1bWY5xt0EAbgIwhYNYSedbPW0SHEROa9gEwJ0ibvWUT3oB2Dq4r6rPRJwR5xQAs8hkunJSfisluRHhgQB+AcAI/vpqyiKuZttm8N4YzG/J1AoxgbRiZV0G4HtVtu0HAM4BMJ19uTaA60Rcn5TkV5GpXsq/89Ly7KzqJ6l6y/T+4Hk3EpVxsoNUvQ3YpuxUg3Gn3aupfAGMkM8CYMvZSwC2zCG/bw750TnkdyOnNlHmwhhR10ozVfUPqvongkd7cUX5hqrfStUfqur3JZE9wDT7VcItSfA2EYzbrQdgw2CCrw9gm5T6LALwTnVdswJOBfBdVT8CwOnBi31TyjIOan33j7YUJOJ6sr/6qfpBJDJw3DcuTK/qTXwa2payiJMB7KbqhwcTz5jrN1PKMuY2OHiUNrmKKoAXcrAGqfrbmOESABODNH3b0oIYUR9yF3BGGhHPDtPkkL+PhGOTZvO2lEPY8r5DoQig6t8EMJwrkuFkEbdGsUyIMUaYqv5sVb9U1ec54RMU2ynsX0P9h6v6ybx+PnjevcQ3bdJnVP18AH3YN4Z/Bq+jIp8NaUtZRF9VP5PXzwbP1y5Sv7LtKkbMxhn3UfXPFDx/Nbher4IKp+E75MiGKTnki3GS1/i/FkVtmqpfkPZC1S+k+AGuRDuXycv0it8UPCupIJGb27L/rukagcxXEVT9u0G6hRV+1o3/K1buE3CCJghXlJU4oYgz8em6assIygrbVm1dUydzMWK+XNU/lvK8PawMA4LrqTGinoWiRIzINPc9AbxcMGurhS+TPlRYpExaE8PuKPF+Bc5MOfMaABtQKbNl/L0a2lLpREiIuUuZdNWgd5hWxJnY8zfqDx0GxWZEJcpDqjmqAoRL1jzKeF1iRH/gUmrvD+f/vetlpiOWBtdrlUqo6tMUnJCTmcw8FZ+Y7a4E8G3K4xcyzeIa6pqmYKYh4Vq1yOqF+JmIW0qx7Sgqz2Y5+gmZjuG/7VjeSihQ0uempSlGzJVULF9BmnJ5m8XkAADH8BSX/b1BjjYhh3y97ZxfDq61RLpiCJXN00Tcc1y9zqKsfDyAfwVparHPl5PpbcCHBitELROnEKbn3MVn77B94wDsFKSrhZgrWXV+GFwvTUtQtVwVoCJzVgqeCpSi/jnkTwHwSA31aBNEnIlY+wTftmXJnEZFyZTUdam0gpxjL1U/TcSFpsJaCCwklpXEQxHXi6bGBaxLe+IJ2swfBjA5URJF3JKgjFQCqxDht2lt2xXAuZQGOhVbdWrZzl6+LIu4nbm0VoJrAtn7yBhR0Y6PEW1dYZ5FIeLOFnGnpLw/mmYnwz2qPq42b2rYu1DJu4vi2WG0CkxjsteDT5bLsSJue3LySvFGkG6T8BsRtxEAswC9AiBR2jsH77uIuHtF3EomvQrb2d/Mg6r+ysDagYLlfvnunYjbRsQVGg9KIWxbuFpaXjvR1j4hWD3Dfuwp4p4Scb2LEWCqHc+2gYPrAZRjdiBHMlPeonK1ziE/K0Z0HuUtI+QpMaIROeSXK2sxIrOUXEuxo3fpHMvCbMDHiLiHVf2T5MhHAPh10KbRbc1c1Vu90yZLgjlURG2Xa28RZxsMG3EDZ1aJ7wrxPLmuya1biDizrtxCm7NtNi2gM8Eo2mRz3N2178ZzM+noKsoLCaZTkS17T73Hxn4PEXcx23kLn1eKvwfp9udm0Sy25VyugCfSbGebOoNFXHcyxYmko7mdRdxqtj0dCPIG2wLeMKUiJg68yOt+nCnGEU7iBkFFyCF/Piv3Dk1iL8WI7ogRXRYjup0EYJsy36+iQ4rhIprFHhVxrazzRMppZmrcRdXPblvW5cHzBiNtK5pEZnV5gffHV5HPBwWK+VXUWyZRdBuo6ueRcFuZ5mmWZ/04ku9Lws6AiLgTC3YZx3Mbv7BOy7iD+z7bZsQ9m3L7sVW07YXAZt+VG1rzyfBMkR7GMymnf8TrPp48McfSrGMHWv+08ONe5BQhVtp5swwpv1xM7X02zXj3VVrxBDnkr4gR/Z4a/648e7A1K2kEeH0O+dcry61kR80TcbZlf5LtBHI22yaKnS2x3c9azGWV1uFuEbc5RZB1yHVM9qxWaTqHk3Ao5cyZPFtyd1DW2yLOdBIzn32NHNvSvFxhGS0UUcYXPE9drdm2vrRAbcA63ajqq7WmHMIzL/24wtsYXRee91D1c7jaHMHjFzHH8I3SWbcDRNzEOuW7cam8RdyH/LusxnIm8oxKQyDi7mxgWUc1wik4KK/ubcvOM2doGmTEnKFpkBFzhqZBRswZmgZNR8x0+UmQTdbPEJpqsEXcAG62JBhKl6kMnwHUcjajI2J1bueOCepWdwfQDB0D9SbmcXXK16flbW5TAB5sx3LGtfPps3I4q4FlTa3xFF+1aGTbMmTIkCFDhgwfI0bUEiNqTzenzyQy01XHwK109M1QAzJiXsWwgDg8xvhqh67opwAZMa96DOHZ3Qc6ekUzZFgBMaJNY0TmSZHIytNiRI38OYamRTH3qA4BEbdjSgyzxareAu7Zezus/qqqv5FxKswd6xVVn5xDtvPMl1gwGwYtsZBQx1sAEu4Wmlf4KIvWxFgQ21qgRXziV3cJXZyW8bD4GbUe5o8RTeJB9ocYEHFuDvkZYRrGtLsg5fNzVP1cugxdyQPq4IH4sUnAGxE3hK5gPehfdybDXvUryM/CO/ybNmCh5485WlxQa5TUVYGOLmbYYB3JaD4L6Y1yePB+WBAiajQ9MZKYZD34beL82Zv3iVd5H8aASOJRDKC3Q4L36Y50Mz23R/P7FRAj6h4jOiBGdHiMqKi/IoPdTCYDuZr1PKqQkIn1WVY3trsb75Nookvp2zeZm0T2zjxpQHe3qZyEj9DptAs3fxbSS2V7Xr9Hr47p9Nt7mXEAawm7tcrwqdjOVvXJQJ2X9gtJIm477ta1W5wNVf+6iLuJE6qVhO5Skv6YbjzmVPlhjOjP9DGcmkP+3RjRAMa8OI3MwwjrUHL7ciHBfqXqHxJxg0OfPFsdRNy1Qbw/C5mQ4/UgTtgR9K1L8FGsOubVmvQpny0jZ27lBE/z/+zwaIazGWuRQ5lIsGN7ZSriRjIswkxyr9TggTnkx8SIziBHO4WEZX8fxIhm0gF4d060dQPu2oWhAdpSt73pfm8xO96iD+dTfJ2EbqjIL07EnU9H0TCgTYcWP4uhGawZB5BQzm3nfI17Tlf1FuJ1cCniyCH/Xg75U+mcmxxsaqGMOoIu8psFhAyGOKjG9T+EiVfPq/ptWLfQWXU+/3+pinZaPIyBDfptxbqhGYjZ3O0PKRHydCydKcfy/oSC9zfzvXHT9UXcMD43othKxF3BEAWOsSGKxovOIT+JQWHmlKmzBYMclEN+Zpl0xWCKXi/W7XFGVBoo4tahy/5iBlE3RfiPFnCmRF7G2fcUcSbHP0nv9VriLq8ydHQx4xm6nyd4uCC65Y2U/5LlenIgN79JeTZBK8MnJEHBZ6S8PymQF8cyrxbKu55crGTAyBzy02NEW1BR3YOEtiY5u8Wx+J0RXA75Uvm8RktHMile4X0SemEcGVE3xpYwccN+ZcCCtXhagUZSNHq6ICDLxCBcMGgtGsUVZRgDLw4q1cYMHQAi7gYRVzSmsIh70X6fJBurTyea7XB+OYwpo9zsWEN00wyrEgD+DzDbCVj6tav0AAAAAElFTkSuQmCC"/>
      </svg>
    </router-link>
    <ol class="BottomASet mx-auto flex justify-between">
      <li><a class="Ag-text14-to-1070 foot__a" href="/">Информация о компании</a></li>
      <li><a class="Ag-text14-to-1070 foot__a" href="/">Свяжитесь с нами</a></li>
      <li><a class="Ag-text14-to-1070 foot__a" href="/">Условия использования</a></li>
    </ol>
    <ul class="IconSet mx-auto flex justify-between">
      <li>
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"
               viewBox="0 0 40 40">
            <image id="Инстаграм" x="2.5" y="2.5" width="35" height="35"
                   xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAADWElEQVRYhb2YS2xOQRTHf6poqVaqIrSSbioajffGRghBCQkhYiGREJbCwqILiyLYaWhiKalFiQaVELHQSkrSsJBYCFakiHr0Rb2qcj7nyjG9c+/U188/meTemTPn/GfOmXPP3HH4MQWoBdYA84HZwHQjnQdM9czuB36a97fAC+AZcBu4AXxJsP0H+UAd0AMM56h1A4eA8UlESoC7OSThtjtqMwPrpolAG7Dc9L0BLgIdus1vVZlFj+opYSTElaVAGVANrALWAxOMZJuGwpCdXeewPg4UhPh1lKgArju2Drru6TWDx3JAotAEvOzkNWOv2y58lxl4qS4bS+wGvqorDqvemcBnY3djZK/JdJ7Kwa68N/qHzA41m/6GfO1caCbKaQqBuHYDsAIo17zSpQF5ExgwOr6b5x/aBO3ADn2uiQQ+GoZVKUQmAUfVmO/I9uiBiBa7SU/mB3VZhHVmzlP0mFlFNsu6mAF0jiKPtHuOfIQldgH5mvYthH0cCnT7l5qxPqAFeKzvi4AtQJG+iwtbgdXGNRYj+qY5q/HhpCPXpHPjdq/Fka3zKK10XBtERgwMGpnzCaTRPNLiGCqKkbNk+kLJ7DHj74DiFDLRAvrNvO0pZIbzApQKVprn5mgVKZCsesWjIxahZMrN86PAOa5seYJcBqFkrFxSkLuwsqm2Qsl0meeaBDkXVrYrZEJIAO8345JJJwfqtdXizhiZSte2JeOrS2cB34xcYwAZ+/Ed8GTifzraggZHrtGzQ8Wah6xsvUdnatLzxVGRpv1hx2Wngb3APuCs5iEr06kf1zhUu2RwJsel+AgVMYSS2gNNfj4siyNji585CZOjHWpwYshtg/otS6uha82851G98UqreME8LT19kGA8oMY2e4qrVs3AaZhrxl9HDxcMwxMBSsYKl4zdM5FO+yEUhoX/gYiki0/G7tZooNQZCMkj2UBKjKtOJfDXiat3gvCcpwbJFmUxxVfmEmevtxL594DFpk9K0MvAff2D0K33n94AQtGVt1ivJlUa7NucvxcS8GudG0QGkhMejiKPZNs6UvJaZofqU64i2Tb5Dh1xfgCQ9LNIgloqfansF2gyDCk3XUj+kQCVvxhPgFt68R/h6iQycZCIDz32QiKkPP0N4BeqGZtRZ9jEpgAAAABJRU5ErkJggg=="/>
          </svg>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"
               viewBox="0 0 40 40">
            <image id="Вконтакте" x="2" y="9" width="36" height="22"
                   xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAWCAYAAACosj4+AAAB4klEQVRIibWWu0tdQRCHP98PEKKIkoiv/AGCiKWFFiIEknQqgkUaCytB7URRCxsLGztRFEE7sbIxhQQbyzSCN4b4AMGIii8UXyzuheNhZ87ZI/5g4bL7m5nv7g5nN4MXNQBFvNYfYB+3PgNVwtoBkBLWjDKBRqAgNL8NHJkf7cCTY9wBdULCayHGjBsgXwFaEuJSweQu5QB9jvlHm1SSgSkT1urtBri0m54rt0Vc1FeOo8TOnSi7VCMUXVFivgeNG4qxV0i+4AnUoPi3gIyg+Ydi3rFHG9aYB5Ap9kvwPtomf6VC4L9SoNMBNOIB1K14p4UTYFgJStkmTwL0Ufmzh8AHCcgsnCpFBhIAZQPriu+LBJPWoBJ8CdR6AGUBM4pnNgrGKM82sZRkE8iNATQFrCnrf4XPiVNtSiIzli3UdIRPGz1xYdKaj0h4aK+IpEA/AzsdS6bB995QMM5Y9YVqBh7eGWrZNn9s9Scs1Gkv0sUY3tnwtRGlyQRAwQ9jl33KaP4RHyBDP+EJFP76NgHnETHffKCMOoCzmEAljviWiIfdMVDqC/UJmAPuI4AqhfjWiOMb8gVKy7ypx4HfjsedeRubO0zSV+BCABr16m5B5gqosE9X0yf/LKSmYqA6ZLgFtp8B6hue8gvn8awAAAAASUVORK5CYII="/>
          </svg>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"
               viewBox="0 0 40 40">
            <image id="Фэйсбук" x="10.5" y="2" width="19" height="36"
                   xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAkCAYAAABrLwHZAAAA6UlEQVRIie2WPQoCMRBGn7IoiI1/lY0HsFhPoL1HsLHwIla23kG9gc2KXsEjiIKgoIKChQiiBLZYFjPJyhbC7gcDYSbzJskwkAz2KgJtoAlUgRfw8O0CeDakAjAC7sBbsL5jAJWAFdCyqZo1xCe2IBNMvU/XFmSCDaKAlKRu7oG6JjYFlsAt4FvrQDmha2Ndku6aFeHE86iwvAA7R4X9pP+FqXGqAb2QvyzkqL2dkO8EzNTCNQywjS2I8c22CYKpbj6BXSjoCEN+8HOC2kiVGkIHXV1SQsYphaWwFBabdJ+9KzDUxI5fvcAH3xNBz9i++4MAAAAASUVORK5CYII="/>
          </svg>
        </router-link>
      </li>
    </ul>
  </footer>
</template>