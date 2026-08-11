import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();

    if (!passcode) {
      return NextResponse.json(
        { error: 'Passcode is required.' },
        { status: 400 }
      );
    }

    // Query admin passcode from Supabase site_settings table
    const { data, error } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'admin_passcode')
      .maybeSingle();

    if (error) {
      console.error('Supabase query error:', error);
      return NextResponse.json(
        { error: 'Database error verifying passcode.' },
        { status: 500 }
      );
    }

    if (!data || passcode !== data.value) {
      return NextResponse.json(
        { error: 'Invalid admin passcode.' },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error.' },
      { status: 500 }
    );
  }
}