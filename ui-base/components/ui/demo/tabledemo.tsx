import Badge from "../badge"
import { Button } from "../button"
import { Checkbox } from "../checkbox"
import Mask from "../mask"
import Table from "../table/Table"

export default function TableDemo() {
  return (
    <>
      <h1 className="my-4 text-2xl font-bold">Table : default</h1>
      <div className="overflow-x-auto py-4">
        <Table>
          <Table.Head>
            <span />
            <span>Name</span>
            <span>Job</span>
            <span>Favorite Color</span>
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <span>1</span>
              <span>Cy Ganderton</span>
              <span>Quality Control Specialist</span>
              <span>Blue</span>
            </Table.Row>

            <Table.Row>
              <span>2</span>
              <span>Hart Hagerty</span>
              <span>Desktop Support Technician</span>
              <span>Purple</span>
            </Table.Row>

            <Table.Row>
              <span>3</span>
              <span>Brice Swyre</span>
              <span>Tax Accountant</span>
              <span>Red</span>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <h1 className="my-4 text-2xl font-bold">Table : zebra</h1>
      <div className="overflow-x-auto py-4">
        <Table zebra>
          <Table.Head>
            <span />
            <span>Name</span>
            <span>Job</span>
            <span>Favorite Color</span>
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <span>1</span>
              <span>Cy Ganderton</span>
              <span>Quality Control Specialist</span>
              <span>Blue</span>
            </Table.Row>

            <Table.Row>
              <span>2</span>
              <span>Hart Hagerty</span>
              <span>Desktop Support Technician</span>
              <span>Purple</span>
            </Table.Row>

            <Table.Row>
              <span>3</span>
              <span>Brice Swyre</span>
              <span>Tax Accountant</span>
              <span>Red</span>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <h1 className="my-4 text-2xl font-bold">Table : hover</h1>
      <div className="overflow-x-auto py-4">
        <Table>
          <Table.Head>
            <span />
            <span>Name</span>
            <span>Job</span>
            <span>Favorite Color</span>
          </Table.Head>

          <Table.Body>
            <Table.Row hover>
              <span>1</span>
              <span>Cy Ganderton</span>
              <span>Quality Control Specialist</span>
              <span>Blue</span>
            </Table.Row>

            <Table.Row hover>
              <span>2</span>
              <span>Hart Hagerty</span>
              <span>Desktop Support Technician</span>
              <span>Purple</span>
            </Table.Row>

            <Table.Row hover>
              <span>3</span>
              <span>Brice Swyre</span>
              <span>Tax Accountant</span>
              <span>Red</span>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <h1 className="my-4 text-2xl font-bold">Table : style</h1>
      <div className="overflow-x-auto py-4">
        <Table className="rounded-box">
          <Table.Head>
            <Checkbox />
            <span>Name</span>
            <span>Job</span>
            <span>Favorite Color</span>
            <span />
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <Checkbox />
              <div className="flex items-center space-x-3 truncate">
                <Mask
                  variant="squircle"
                  src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                />
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
              <div>
                Zemlak, Daniel and Leannon
                <br />
                <Badge color="primary" size="sm">
                  Desktop Support Technician
                </Badge>
              </div>
              <div>Purple</div>
              <Button color="primary" size="sm">
                details
              </Button>
            </Table.Row>

            <Table.Row>
              <Checkbox />
              <div className="flex items-center space-x-3 truncate">
                <Mask
                  variant="squircle"
                  src="http://daisyui.com/tailwind-css-component-profile-3@56w.png"
                />
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
              <div>
                Carrol Group
                <br />
                <Badge color="primary" size="sm">
                  Tax Accountant
                </Badge>
              </div>
              <div>Red</div>
              <Button color="primary" size="sm">
                details
              </Button>
            </Table.Row>

            <Table.Row>
              <Checkbox />
              <div className="flex items-center space-x-3 truncate">
                <Mask
                  variant="squircle"
                  src="http://daisyui.com/tailwind-css-component-profile-4@56w.png"
                />
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
              <div>
                Rowe-Schoen
                <br />
                <Badge color="primary" size="sm">
                  Office Assistant I
                </Badge>
              </div>
              <div>Crimson</div>
              <Button color="primary" size="sm">
                details
              </Button>
            </Table.Row>

            <Table.Row>
              <Checkbox />
              <div className="flex items-center space-x-3 truncate">
                <Mask
                  variant="squircle"
                  src="http://daisyui.com/tailwind-css-component-profile-5@56w.png"
                />
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
              <div>
                Wyman-Ledner
                <br />
                <Badge color="primary" size="sm">
                  Community Outreach Specialist
                </Badge>
              </div>
              <div>Indigo</div>
              <Button color="primary" size="sm">
                details
              </Button>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <span>&nbsp;</span>
            <span>Name</span>
            <span>Job</span>
            <span>Favorite Color</span>
            <span>&nbsp;</span>
          </Table.Footer>
        </Table>
      </div>
      <h1 className="my-4 text-2xl font-bold">Table : compact</h1>
      <div className="overflow-x-auto py-4">
        <Table>
          <Table.Head>
            <span />
            <span>Name</span>
            <span>Job</span>
            <span>Company</span>
            <span>Location</span>
            <span>Last Login</span>
            <span>Favorite Color</span>
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <span>1</span>
              <span>Cy Ganderton</span>
              <span>Quality Control Specialist</span>
              <span>Littel, Schaden and Vandervort</span>
              <span>Canada</span>
              <span>12/16/2020</span>
              <span>Blue</span>
            </Table.Row>

            <Table.Row>
              <span>2</span>
              <span>Hart Hagerty</span>
              <span>Desktop Support Technician</span>
              <span>Zemlak, Daniel and Leannon</span>
              <span>United States</span>
              <span>12/5/2020</span>
              <span>Purple</span>
            </Table.Row>

            <Table.Row>
              <span>3</span>
              <span>Brice Swyre</span>
              <span>Tax Accountant</span>
              <span>Carroll Group</span>
              <span>China</span>
              <span>8/15/2020</span>
              <span>Red</span>
            </Table.Row>

            <Table.Row>
              <span>4</span>
              <span>Marjy Ferencz</span>
              <span>Office Assistant I</span>
              <span>Rowe-Schoen</span>
              <span>Russia</span>
              <span>3/25/2021</span>
              <span>Crimson</span>
            </Table.Row>

            <Table.Row>
              <span>5</span>
              <span>Yancy Tear</span>
              <span>Community Outreach Specialist</span>
              <span>Wyman-Ledner</span>
              <span>Brazil</span>
              <span>5/22/2020</span>
              <span>Indigo</span>
            </Table.Row>

            <Table.Row>
              <span>6</span>
              <span>Irma Vasilik</span>
              <span>Editor</span>
              <span>Wiza, Bins and Emard</span>
              <span>Venezuela</span>
              <span>12/8/2020</span>
              <span>Purple</span>
            </Table.Row>

            <Table.Row>
              <span>7</span>
              <span>Meghann Durtnal</span>
              <span>Staff Accountant IV</span>
              <span>Schuster-Schimmel</span>
              <span>Philippines</span>
              <span>2/17/2021</span>
              <span>Yellow</span>
            </Table.Row>

            <Table.Row>
              <span>8</span>
              <span>Sammy Seston</span>
              <span>Accountant I</span>
              <span>O&apos;Hara, Welch and Keebler</span>
              <span>Indonesia</span>
              <span>5/23/2020</span>
              <span>Crimson</span>
            </Table.Row>

            <Table.Row>
              <span>9</span>
              <span>Lesya Tinham</span>
              <span>Safety Technician IV</span>
              <span>Turner-Kuhlman</span>
              <span>Philippines</span>
              <span>2/21/2021</span>
              <span>Maroon</span>
            </Table.Row>

            <Table.Row>
              <span>10</span>
              <span>Zaneta Tewkesbury</span>
              <span>VP Marketing</span>
              <span>Sauer LLC</span>
              <span>Chad</span>
              <span>6/23/2020</span>
              <span>Green</span>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  )
}
