import { NextRequest, NextResponse } from 'next/server';
import Convidado from '../../../../models/convidado';
// CREATE
export async function POST(req: NextRequest) {
    const data = await req.json();
    const novoConvidado = await Convidado().create(data);
    return NextResponse.json(novoConvidado, { status: 201 });
}
// READ ALL BY CASAMENTO
export async function GET(req: NextRequest) {
    const { id_casamento }: any = req.nextUrl.searchParams;
    return NextResponse.json(await Convidado().findAll({ where: { id_casamento } }), { status: 200 });
}
// UPDATE
export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { id, ...rest } = data;
    const convidado = await Convidado().findByPk(id);
    if (!convidado) {
        return NextResponse.json({ error: 'Convidado não encontrado' }, { status: 404 });
    }
    await convidado.update(rest);
    return NextResponse.json(convidado);
}
// DELETE
export async function DELETE(req: NextRequest) {
    const { id } = await req.json();
    const convidado = await Convidado().findByPk(id);
    if (!convidado) {
        return NextResponse.json({ error: 'Convidado não encontrado' }, { status: 404 });
    }
    await convidado.destroy();
    return NextResponse.json(convidado);
}